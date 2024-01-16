#!/usr/bin/env nodejs

const mime = require('mime');
const cheerio = require('cheerio');
const {optimize} = require('svgo');
const svgpath = require('svgpath');
const svg2ttf = require('svg2ttf');
const ttf2woff = require('ttf2woff');
const ttf2woff2 = require('ttf2woff2');
const ttf2eot = require('ttf2eot');
const io = require('./io');
const log = require('./log');

/**
 * SVG Font Builder.
 */
class Builder {
    /**
     * Constructor.
     *
     * @return {Void}
     */
    constructor() {
        this._src = null;
        this._glyphSize = null;
        this._unicode = null;
        this._$ = null;
        this._$content = null;
    }

    /**
     * Destructor.
     *
     * @return {Void}
     */
    destroy() {
        delete this._$content;
        delete this._$;
        delete this._unicode;
        delete this._glyphSize;
        delete this._src;
    }

    /**
     * Source property getter.
     *
     * @return {String|Null}
     */
    get src() {
        return this._src;
    }

    /**
     * Glyph size property getter.
     *
     * @return {Number|Null}
     */
    get glyphSize() {
        return this._glyphSize;
    }

    /**
     * Content property getter.
     *
     * @return {String|Null}
     */
    get content() {
        if (!this._$content)
            return null;

        return this._$content.prop('outerHTML');
    }

    /**
     * Load SVG font file.
     *
     * @param  {String}  src
     * @return {Promise}
     */
    load(src) {
        this._src = null;
        this._glyphSize = null;
        this._unicode = null;
        this._$ = null;
        this._$content = null;

        return Promise.resolve()
            .then(() => io.exists(src))
            .then((exists) => {
                if (!exists)
                    log.info('Can not load source svg, creating from template...');

                if (!exists)
                    return Promise.resolve()
                        .then(() => io.readFile('./template/icons.svg'))
                        .then((content) => io.writeFile(src))
            })
            .then(() => io.lstat(src))
            .then((stats) => {
                if (!stats.isFile)
                    throw 'Font.Builder: source svg is not a file.';
            })
            .then(() => {
                const type = mime.lookup(src);
                if (type && !/^image\/svg/.test(type))
                    throw 'Font.Builder: source svg is not a svg file.';
            })
            .then(() => io.readFile(src))
            .then((content) => {
                if (!content)
                    throw 'Font.Builder: source svg file is empty.';

                const $ = cheerio.load(content),
                    $content = $('svg'),
                    glyphSize = $content.find('font-face').attr('units-per-em')*1;

                if (!$content.length)
                    throw 'Font.Builder: source svg is not a svg file.';
                else if (!glyphSize)
                    throw 'Font.Builder: can not determine glyph size from source svg.';
                else
                    log.info(`Source ${src} loaded.`);

                this._$ = $;
                this._$content = $content;
                this._glyphSize = glyphSize;
                this._src = src;

                this._updateLastUnicode();
            });
    }

    /**
     * Add glyph.
     *
     * @param  {String} name
     * @param  {String} content
     * @param  {String} tags
     * @return {Void}
     */
    addGlyph(name, content, tags='') {
        let $font = this._$content.find('font'),
            $glyph = $font.find(`glyph[glyph-name="${name}"]`)
        if (!$glyph.length)
            $glyph = this._$(`<glyph />`)
                .attr('glyph-name', name)
                .attr('unicode', this._requestNextUnicode())
                .appendTo($font);

        // @todo resize path this.glyphSize

        let parse = this._parseFontContent(content),
            size = parse['horiz-adv-x'],
            d = svgpath(parse.d)
                //.translate(0, this.glyphSize*-1)
                .translate(0, size*-1)
                .scale(1, -1)
                .rel()
                .toString();
        $glyph
            .attr('horiz-adv-x', size)
            .attr('d', d)
            .attr('data-tags', tags);

        if (parse['horiz-adv-x'] > $font.attr('horiz-adv-x')*1)
            $font.attr('horiz-adv-x', parse['horiz-adv-x'] + 24);
    }

    /**
     * Register missing glyph.
     *
     * @param  {String} content
     * @return {Void}
     */
    registerMissingGlyph(content) {
        let $glyph = this._$content.find('missing-glyph');
        if (!$glyph.length)
            $glyph = this._$('<missing-glyph></missing-glyph>')

        const parse = this._parseFontContent(content);
        $glyph
            .empty()
            .attr('horiz-adv-x', parse['horiz-adv-x']);

        this._$('<path></path>')
            .attr('d', parse.d)
            .appendTo($glyph)

        if (!$glyph.parent().length) {
            let $first = this._$content.find('glyph:first');
            if ($first.length)
                $glyph.insertBefore($first)
            else
                $glyph.prependTo(this._$content.find('font'))
        }
    }

    /**
     * Glyph exists.
     *
     * @param  {String}  name
     * @return {Boolean}
     */
    glyphExists(name) {
        return !!this._$content.find(`glyph[glyph-name="${name}"]`).length;
    }

    /**
     * Missing glyph exists.
     *
     * @return {Boolean}
     */
    missingGlyphExists() {
        return !!this._$content.find('missing-glyph').length;
    }

    /**
     * Save font SVG to src file.
     *
     * @return {Promise}
     */
    save() {
        return this.saveAs(this.src);
    }

    /**
     * Save font SVG to custom file.
     *
     * @param  {String}  filename
     * @return {Promise}
     */
    saveAs(filename) {
        return Promise.resolve(this.content)
            .then((content) => this._svgDoctype() + content)
            .then((content) => optimize(content, {
                params: {
                    overrides: {
                        removeDoctype: false,
                    },
                },
                js2svg: {
                    indent: 2,
                    pretty: true,
                },
                plugins: [],
            }).data)
            .then((content) => content.replace(/\sunicode="(.*?)"/g, (subject, group) => ` unicode="${this._escapeUnicode(group)}"`))
            .then((content) => io.writeFile(filename, content));
    }

    /**
     * Parse unicode attribute as object with hex and int values.
     *
     * @param  {String} value
     * @return {Object}
     */
    _parseUnicode(value) {
        if (!value)
            return null;

        let raw = value,
            hex = null,
            int = null,
            match;

        if (raw.length === 1) {
            match = true;

            int = raw.charCodeAt(0);
            hex = int.toString(16);
        }

        if (!match) {
            match = raw.match(/&#(\d+);/);

            if (match) {
                int = match[1];
                hex = int.toString(16);
            }
        }

        if (!match) {
            match = raw.match(/&#x([A-Fa-f\d]+);/);

            if (match) {
                hex = match[1];
                int = parseInt(hex, 16);
            }
        }

        if (!hex && !int)
            return null;

        return {
            raw: raw,
            hex: hex,
            int: int,
        };
    }

    /**
     * Escape unicode.
     *
     * @param  {String} value
     * @return {String}
     */
    _escapeUnicode(value) {
        let parse = this._parseUnicode(value);
        if (!parse)
            return value;

        return `&#x${parse.hex.toUpperCase()};`;
    }

    /**
     * Update last unicode.
     *
     * @return {String}
     */
    _updateLastUnicode() {
        this._unicode = this._$content.find('glyph')
            .toArray()
            .map((element) => this._parseUnicode(this._$(element).attr('unicode') || null))
            .filter((parse) => parse !== null)
            .reduce((result, item) => result.int > item.int ? result : item, this._parseUnicode('\uea00'))
            .hex;
    }

    /**
     * Request next unicode (increment last used).
     *
     * @return {String|Null}
     */
    _requestNextUnicode() {
        if (!this._unicode)
            return null;

        this._unicode = (parseInt(this._unicode, 16) + 1)
            .toString(16)
            .padStart(4, '0')
            .toUpperCase();

        return String.fromCharCode(parseInt(this._unicode, 16));
    }

    /**
     * SVG doctype.
     *
     * @return {String}
     */
    _svgDoctype() {
        return ''
            + '<?xml version="1.0" standalone="no"?>\n'
            + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n';
    }

    /**
     * Get image size from SVG content.
     *
     * @param  {String}      content
     * @return {Number|Null}
     */
    _parseFontContent(content) {
        let $ = cheerio.load(content),
            $svg = $('svg'),
            width = $svg.attr('width'),
            height = $svg.attr('height'),
            viewBox = ($svg.attr('viewBox') || '').match(/\w+ \w+ (\w+) (\w+)/),
            max = Math.max(
                width*1 || 0,
                height*1 || 0,
                (viewBox ? parseFloat(viewBox[1]) : 0) || 0,
                (viewBox ? parseFloat(viewBox[2]) : 0) || 0
            );

        return {
            'horiz-adv-x': max || null,
            'd': $svg.find('path').attr('d') || null,
        };
    }
};

/**
 * SVG Font Converter.
 */
class Converter {
    /**
     * Constructor.
     *
     * @return {Void}
     */
    constructor() {
        this._src = null;
        this._svg = null;
        this._ttf = null;
    }

    /**
     * Destructor.
     *
     * @return {Void}
     */
    destroy() {
        delete this._ttf;
        delete this._svg;
        delete this._src;
    }

    /**
     * Source property getter.
     *
     * @return {String|Null}
     */
    get src() {
        return this._src;
    }

    /**
     * Load SVG font file.
     *
     * @param  {String}  src
     * @return {Promise}
     */
    load(src) {
        this._src = null;
        this._svg = null;
        this._ttf = null;

        return Promise.resolve()
            .then(() => io.exists(src))
            .then((exists) => {
                if (!exists)
                    throw 'Font.Converter: can not load source svg.';
            })
            .then(() => io.lstat(src))
            .then((stats) => {
                if (!stats.isFile)
                    throw 'Font.Converter: source svg is not a file.';
            })
            .then(() => {
                const type = mime.lookup(src);
                if (type && !/^image\/svg/.test(type))
                    throw 'Font.Converter: source svg is not a svg file.';
            })
            .then(() => io.readFile(src))
            .then((content) => {
                if (!content)
                    throw 'Font.Converter: source svg file is empty.';

                const $ = cheerio.load(content);
                if (!$('svg').length)
                    throw 'Font.Converter: source svg is not a svg file.';

                this._src = src;
                this._svg = content;
            });
    }

    /**
     * Convert SVG font to TTF.
     *
     * @return {Promise}
     */
    toTtf() {
        return Promise.resolve()
            .then(() => {
                if (!this.src)
                    throw 'Font.Converter: can not convert, source not loaded.';
            })
            .then(() => svg2ttf(this._svg, {}))
            .then(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => resolve(), 1000);
                });
            })
            .then(() => svg2ttf(this._svg, {}))
            .then((ttf) => Buffer.from(ttf.buffer))
            .then((buffer) => {
                this._ttf = buffer;

                return this._ttf;
            });
    }

    /**
     * Convert SVG font to WOFF.
     *
     * @return {Promise}
     */
    toWoff() {
        return Promise.resolve()
            .then(() => this._loadTtf())
            .then((buffer) => ttf2woff(new Uint8Array(buffer), {}));
    }

    /**
     * Convert SVG font to WOFF2.
     *
     * @return {Promise}
     */
    toWoff2() {
        return Promise.resolve()
            .then(() => this._loadTtf())
            .then((buffer) => ttf2woff2(buffer, {}));
    }

    /**
     * Convert SVG font to EOT.
     *
     * @return {Promise}
     */
    toEot() {
        return Promise.resolve()
            .then(() => this._loadTtf())
            .then((buffer) => ttf2eot(buffer, {}));
    }

    _loadTtf() {
        if (this._ttf)
            return Promise.resolve(this._ttf);

        return this.toTtf();
    }
};

// Module exports.
module.exports = {
    Builder,
    Converter,
};
