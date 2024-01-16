#!/usr/bin/env nodejs

const tmp = require('tmp');
const {spawn} = require('child_process');
const which = require('which');
const cheerio = require('cheerio');
const SVGFixer = require('oslllo-svg-fixer');
const svgpath = require('svgpath');
const {optimize} = require('svgo');
const io = require('./io');
const log = require('./log');

/**
 * SVG Optimizer.
 */
class Optimizer {
    /**
     * Constructor.
     *
     * @param  {Boolean} skipLogging
     * @return {Void}
     */
    constructor(skipLogging=false) {
        if (!skipLogging)
            if (!which.sync('inkscape', { nothrow: true }))
                log.warning('Inkscape binary not found, svg paths won\'t be merged.');
    }

    /**
     * Destructor.
     *
     * @return {Void}
     */
    destroy() {
        // pass
    }

    /**
     * Optimize SVG.
     *
     * @param  {String}  content
     * @param  {Number}  size
     * @return {Promise}
     */
    optimize(content, size) {
        return Promise.resolve(content)
            .then((content) => this._flattenWithInkscape(content))
            .then((content) => this._flattenWithSvgFixed(content))
            .then((content) => this._removePathTransform(content))
            .then((content) => this._fixViewport(content, size))
            .then((content) => this._resizeSvg(content, size))
            .then((content) => this._removeUnnecessaryNodesAndAttributes(content))
            .then((content) => this._optimizeWithSVGO(content))
            .then((content) => this._setPathFillColor(content))
    }

    /**
     * Validate SVG content.
     *
     * @param  {String}  content
     * @return {Boolean}
     */
    validate(content) {
        if (!content)
            return false;

        const $ = cheerio.load(content),
            $svg = $('svg');

        return $svg.length === 1 && $svg.find('path').length === 1;
    }

    /**
     * Get temp filename.
     *
     * @return {Promise}
     */
    _getTempFile() {
        return new Promise((resolve, reject) => {
            tmp.file({
                mode: 0o644,
                prefix: '',
                postfix: '.svg',
                keep: false,
            }, (err, path) => {
                !err ? resolve(path) : reject(err);
            });
        });
    }

    /**
     * Write content to temp file.
     *
     * @param  {String}  content
     * @return {Promise}
     */
    _writeToTempFile(content) {
        return Promise.resolve()
            .then(() => this._getTempFile())
            .then((path) => {
                return io.writeFile(path, content)
                    .then(() => path);
            });
    }

    /**
     * Spawn process.
     *
     * @param  {String}  cmd
     * @param  {Array}   args
     * @return {Promise}
     */
    _spawnProcess(cmd, args=[]) {
        return new Promise((resolve, reject) => {
            const proc = spawn(cmd, args);
            proc.on('error', error => {
                reject(error);
            });
            proc.on('close', code => {
                resolve();
            });
        });
    }

    /**
     * Fix viewport: adjust viewport to match width/height.
     *
     * @param  {String} content
     * @return {String}
     */
    _fixViewport(content) {
        if (!this.validate(content))
            return content;

        const $ = cheerio.load(content),
            $svg = $('svg'),
            $path = $svg.find('path'),
            d = $path.attr('d');
        if (!d)
            return content;

        const width = $svg.attr('width'),
            height = $svg.attr('height'),
            viewBox = this._parseViewbox($svg.attr('viewBox'));
        if (!width || !height || !viewBox)
            return content;

        const _offsetX = viewBox[0],
            _offsetY = viewBox[1],
            _width = viewBox[2],
            _height = viewBox[3];

        $path
            .attr('d', svgpath($path.attr('d'))
                .scale(_width/width, _height/height)
                .translate(_offsetX*-1, _offsetY*-1)
                .rel()
                .toString());
        $svg
            .attr('width', _width)
            .attr('height', _height);

        return $svg.prop('outerHTML');
    }

    /**
     * Resize SVG.
     *
     * @param  {String} content
     * @param  {Number} size
     * @return {String}
     */
    _resizeSvg(content, size) {
        if (!size || !this.validate(content))
            return content;

        const $ = cheerio.load(content),
            $svg = $('svg'),
            $path = $svg.find('path'),
            d = $path.attr('d');
        if (!d)
            return content;

        let width = parseFloat($svg.attr('width')) || 0,
            height = parseFloat($svg.attr('height')) || 0,
            viewBox = ($svg.attr('viewBox') || '').match(/\w+ \w+ (\w+) (\w+)/);
        if (viewBox && parseFloat(viewBox[1]))
            width = parseFloat(viewBox[1]);
        if (viewBox && parseFloat(viewBox[2]))
            height = parseFloat(viewBox[2]);
        if (!width || !height || width === size && height === size)
            return content;

        // @todo - translate!!!
        //      - get x, y
        //      - get width, height
        //      - ???
        //
        let translateX = width > height ? 0 : 0,
            translateY = width > height ? 0 : 0,
            scale = size / Math.max(width, height);
        //translateY = 32;

        $path.attr('d', svgpath(d)
            .translate(translateX, translateY)
            .scale(scale, scale)
            .rel()
            .toString());

        return $svg
            .removeAttr('width')
            .removeAttr('height')
            .attr('viewBox', `0 0 ${size} ${size}`)
            .prop('outerHTML');
    }

    /**
     * Remove unnecessary attributes from SVG.
     *
     * @param  {String} content
     * @return {String}
     */
    _removeUnnecessaryNodesAndAttributes(content) {
        if (!this.validate(content))
            return content;

        const $ = cheerio.load(content),
            $svg = $('svg'),
            $path = $svg.find('path');

        this._removeElement($, $svg, 'defs');
        this._removeElementAttributes($, $svg, ['viewBox', 'xmlns']);
        this._removeElementAttributes($, $path, ['d', 'opacity']);
        this._trimElementAttribute($, $path, 'd');

        return $svg.prop('outerHTML');
    }

    /**
     * Remove element.
     *
     * @param  {Function}              $
     * @param  {LoadedCheerio|Element} context
     * @param  {String}                selector
     * @return {Void}
     */
    _removeElement($, context, selector) {
        $(context)
            .find(selector)
            .remove();
    }

    /**
     * Trim cheerio attribute.
     *
     * @param  {Function}              $
     * @param  {LoadedCheerio|Element} element
     * @param  {String}                attribute
     * @return {Void}
     */
    _trimElementAttribute($, element, attribute) {
        $(element).each((index, element) => {
            const value = $(element).attr(attribute);
            $(element).attr(attribute, value.trim());
        });
    }

    /**
     * Set cheerio attribute.
     *
     * @param  {Function}              $
     * @param  {LoadedCheerio|Element} element
     * @param  {Array}                 attribute
     * @param  {String}                value
     * @return {Void}
     */
    _setElementAttribute($, element, attribute, value) {
        $(element).attr(attribute, value);
    }

    /**
     * Remove cheerio attributes.
     *
     * @param  {Function}              $
     * @param  {LoadedCheerio|Element} element
     * @param  {Array}                 preserve
     * @return {Void}
     */
    _removeElementAttributes($, element, preserve=[]) {
        $(element).each((index, element) => {
            if (element && element.attribs)
                Object.keys(element.attribs)
                    .filter((attr) => !preserve.includes(attr))
                    .forEach((attr) => {
                        $(element).removeAttr(attr);
                    });
        });
    }

    /**
     * Set path fill color to currentColor.
     *
     * @param {String} content
     * @return {String}
     */
    _setPathFillColor(content) {
        if (!this.validate(content))
            return content;

        const $ = cheerio.load(content),
            $svg = $('svg');

        this._setElementAttribute($, $svg.find('path'), 'fill', 'currentColor');

        return $svg.prop('outerHTML');
    }

    /**
     * Parse viewBox attribute.
     *
     * @param  {String}     value
     * @return {Array|Null}
     */
    _parseViewbox(value) {
        const re = /([-\da-z]+)\s+([-\da-z]+)\s+([-\da-z]+)\s+([-\da-z]+)/,
            match = (value || '').match(re);
        if (!match)
            return null;

        return [ parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3]), parseFloat(match[4]) ];
    }

    /**
     * Flatten SVG content with inkscape.
     *
     * @param  {String}  content
     * @return {Promise}
     */
    _flattenWithInkscape(content) {
        return new Promise((resolve, reject) => {
            const bin = which.sync('inkscape', { nothrow: true });
            if (!bin)
                return resolve(content);

            return Promise.resolve()
                .then(() => this._writeToTempFile(content))
                .then((path) => {
                    return Promise.resolve()
                        .then(() => this._spawnProcess(bin, [
                            path,
                            '--actions', [
                                'select-by-element:circle', 'object-to-path',
                                'select-by-element:ellipse', 'object-to-path',
                                'select-by-element:line', 'object-to-path',
                                'select-by-element:polygon', 'object-to-path',
                                'select-by-element:polyline', 'object-to-path',
                                'select-by-element:rect', 'object-to-path',
                                'select-by-element:text', 'object-to-path',
                                'select-by-element:g', 'SelectionUnGroup',
                                'select-by-element:g', 'SelectionUnGroup',
                                'select-by-element:g', 'SelectionUnGroup',
                                'select-by-element:g', 'SelectionUnGroup',
                                'select-by-element:g', 'SelectionUnGroup',
                                'select-all', 'object-stroke-to-path', 'SelectionUnion',
                                'vacuum-defs',
                            ].join(';'),
                            '--export-plain-svg',
                            '--export-type', 'svg',
                            '--export-filename', path,
                        ]))
                        .then(() => io.readFile(path));
                })
                .then((content) => resolve(content));
        });
    }

    /**
     * Flatten SVG content with SVGFixer.
     *
     * @param  {String}  content
     * @return {Promise}
     */
    _flattenWithSvgFixed(content) {
        const fs = require('fs');
        const os = require('os');
        const path = require('path');
        const tmp = fs.mkdtempSync(path.join(os.tmpdir(), '/'));

        return Promise.resolve()
            .then(() => this._writeToTempFile(content))
            .then((src) => {
                return SVGFixer(src, tmp).fix()
                    .then(() => path.join(tmp, path.basename(src)));
            })
            .then((dst) => io.readFile(dst))
    }

    /**
     * Fix viewbox offset:
     * set viewbox min-x and min-y to zero and transform path.
     *
     * @param  {String} content
     * @return {String}
     */
    _removePathTransform(content) {
        if (!this.validate(content))
            return content;

        const $ = cheerio.load(content),
            $svg = $('svg'),
            $path = $svg.find('path'),
            viewBox = this._parseViewbox($svg.attr('viewBox')),
            transform = $path.attr('transform');
        if (!viewBox && !transform)
            return content;

        const offsetX = viewBox[0],
            offsetY = viewBox[1],
            width = viewBox[2],
            height = viewBox[3];
        if (!transform && !offsetX && !offsetY)
            return content;

        $path
            .removeAttr('transform')
            .attr('d', svgpath($path.attr('d'))
                .transform(transform)
                .translate(offsetX*-1, offsetY*-1)
                .rel()
                .toString());
        $svg.attr('viewBox', `0 0 ${width} ${height}`);

        return $svg.prop('outerHTML');
    }

    /**
     * Optmize SVG content with SVGO.
     *
     * @param  {String} content
     * @return {String}
     */
    _optimizeWithSVGO(content) {
        return optimize(content, {
            multipass: true,
            js2svg: {
                indent: 2,
                pretty: true,
            },
            plugins: [
                'preset-default',
                'removeDimensions',
            ],
        }).data;
    }
}

// Module exports.
module.exports = {
    Optimizer,
};
