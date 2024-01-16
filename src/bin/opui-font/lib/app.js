#!/usr/bin/env nodejs

// Import module(s).
const cheerio = require('cheerio');
const {App: Cli} = require('./cli');
const io = require('./io');
const log = require('./log');

/**
 * Cli App with predefined arguments from config.json.
 */
class App extends Cli {
    /**
     * Override argument parser. Instead of reading process.argv we are going
     * to use config.json file.
     *
     * @return {Object}
     */
    _parseArguments() {
        return {
            [process.argv[1]]: null,
            '--src': this._getConfig('src'),
            '--add-glyph-directory': this._getConfig('glyphs'),
            '--export-ttf': this._getConfig('dst.ttf'),
            '--export-woff': this._getConfig('dst.woff'),
            '--export-woff2': this._getConfig('dst.woff2'),
            '--export-eot': this._getConfig('dst.eot'),
        };
    }

    /**
     * Add scss exporter to start method.
     *
     * @return {Promise}
     */
    start() {
        let src, dst, icons;

        return super.start()
            .then(() => log.info('Updating scss...'))
            .then(() => {
                src = this._getConfig('src');
                dst = this._getConfig('dst.scss');
            })
            .then(() => io.readFile(src))
            .then((content) => {
                const $ = cheerio.load(content),
                    $glyphs = $('glyph[glyph-name]');

                icons = $glyphs
                    .map((index, element) => {
                        const $element = $(element),
                            name = $element.attr('glyph-name'),
                            unicode = $element.attr('unicode'),
                            int = unicode.charCodeAt(0),
                            hex = int.toString(16);

                        return `    ${name}: "${hex}"`;
                    })
                    .toArray();

                return content;
            })
            .then(() => io.readFile(dst))
            .then((content) => {
                return content.replace(/\$icons:\s*\([^)]+\)/, function() {
                    return `$icons: (\n${icons.join(',\n')}\n)`;
                });
            })
            .then((content) => io.writeFile(dst, content))
            .then(() => null);
    }
};

// Module exports.
module.exports = {
    App,
};
