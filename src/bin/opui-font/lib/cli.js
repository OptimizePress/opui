#!/usr/bin/env nodejs

// Import module(s).
const io = require('./io');
const log = require('./log');
const font = require('./font');
const {Optimizer} = require('./optimizer');

/**
 * CLI App.
 */
class App {
    /**
     * Constructor.
     *
     * @return {Void}
     */
    constructor() {
        this._config = {};

        let dirname = io.dirname(process.argv[1]),
            filename = io.resolve(dirname, 'config.json'),
            exists = io.existsSync(filename),
            content = exists ? io.readFileSync(filename) : null;
        if (content) {
            content = content
                .replace(/{dirname}/g, dirname)
                .replace(/{filename}/g, filename)
                .replace(/{homedir}/g, io.homedir())
                .replace(/{tmpdir}/g, io.tmpdir())
                .replace(/{timestamp}/g, Math.floor(new Date().getTime() / 1000));

            this._config = JSON.parse(content);
        }

        this._fontBuilder = new font.Builder();
        this._fontConverter = new font.Converter();
        this._optimizer = new Optimizer();
        this._argv = this._parseArguments();

        this._createFromTemplate();
        this._validateArguments(this._argv);

        const argv = this._argv;
        if (typeof argv['--help'] !== 'undefined')
            log.infoAndExit(0, this.help());

        const noJobs = true
            && typeof argv['--add-glyph'] === 'undefined'
            && typeof argv['--register-missing-glyph'] === 'undefined'
            && typeof argv['--export-ttf'] === 'undefined'
            && typeof argv['--export-woff'] === 'undefined'
            && typeof argv['--export-woff2'] === 'undefined'
            && typeof argv['--export-eot'] === 'undefined';
        if (noJobs)
            log.infoAndExit(0, 'Nothing to do.');
    }

    /**
     * Destructor.
     *
     * @return {Void}
     */
    destroy() {
        if (this._optimizer)
            this._optimizer.destroy();
        if (this._fontConverter)
            this._fontConverter.destroy();
        if (this._fontBuilder)
            this._fontBuilder.destroy();

        delete this._argv;
        delete this._optimizer;
        delete this._fontConverter;
        delete this._fontBuilder;
        delete this._config;
    }

    /**
     * CLI help string.
     *
     * @return {String}
     */
    help() {
        return 'help @todo';
    }

    /**
     * Start command.
     *
     * @return {Promise}
     */
    start() {
        const src = this._argv['--src'];

        return Promise.resolve()
            .then(() => this._fontBuilder.load(src))
            .then(() => this._processRegisterMissingGlyphArgument())
            .then(() => this._processAddGlyphArgument())
            .then(() => this._fontBuilder.save())
            .then(() => this._fontConverter.load(src))
            .then(() => this._processExportTtfArgument())
            .then(() => this._processExportWoffArgument())
            .then(() => this._processExportWoff2Argument())
            .then(() => this._processExportEotArgument())
            .then(() => null);
    }

    /**
     * Get config property.
     *
     * @param  {String} key
     * @return {Mixed}
     */
    _getConfig(key=null) {
        let result = this._config;
        if (key === null)
            return result;

        let prop = key.split('.');
        while (prop.length) {
            let current = prop.shift();

            if ((current in result) && (typeof result === 'object'))
                result = result[current];
            else
                return undefined;
        }

        return result;
    }

    /**
     * Create soruce SVG from template.
     *
     * @return {Void}
     */
    _createFromTemplate() {
        var src = this._argv['--src'];
        if (io.existsSync(src))
            return;

        log.info('Source svg file missing, creating from template...');
        io.writeFileSync(src, io.readFileSync('./templates/icons.svg'));
    }

    /**
     * Parse process.argv.
     *
     * @return {Object}
     */
    _parseArguments() {
        return process.argv.slice(1).reduce((result, item) => {
            let match = item.match(/^(.+?)=(.*)$/),
                key = match ? match[1] : item,
                value = match ? match[2] : null;

            if (key in result) {
                if (!Array.isArray(result[key]))
                    result[key] = [result[key]];

                result[key].push(value);
                value = result[key];
            }

            return {
                ...result,
                [key]: value,
            };
        }, {});
    }

    /**
     * Validate arguments.
     *
     * @todo
     *     - refactor this!
     *     - convert all to absolute path
     *     - unique --add-glyph arguments
     *     - check if args absolute path points to script dir or any of it's parent
     *
     * @return {Void} [description]
     */
    _validateArguments(argv) {
        if (Array.isArray(argv['--src']))
            argv['--src'] = argv['--src'].pop();
        if (typeof argv['--src'] === 'undefined')
            log.errorAndExit(1, 'Argument --src is missing.');
        else if (!argv['--src'])
            log.errorAndExit(1, 'Argument --src is empty.');
        else if (argv['--src'] === './templates/icons.svg')
            log.errorAndExit(1, 'Argument --src can not point to script directory.');
        else if (io.lstatSync(argv['--src']).isDirectory)
            log.errorAndExit(1, 'Argument --src can not be directory.');
        argv['--src'] = io.resolve(argv['--src']);
        // @todo - check if src's absolute path points to script dir or any of it's parent

        if (Array.isArray(argv['--register-missing-glyph']))
            argv['--register-missing-glyph'] = argv['--register-missing-glyph'].pop();
        if (typeof argv['--register-missing-glyph'] !== 'undefined' && !argv['--register-missing-glyph'])
            log.errorAndExit(1, 'Argument --register-missing-glyph is empty.');
        else if (typeof argv['--register-missing-glyph'] !== 'undefined' && !io.existsSync(argv['--register-missing-glyph']))
            log.errorAndExit(1, `Missing glyph ${argv['--register-missing-glyph']} does not exist.`);
        if (argv['--register-missing-glyph'])
            argv['--register-missing-glyph'] = io.resolve(argv['--register-missing-glyph']);
        // @todo - check if path's absolute path points to script dir or any of it's parent

        if (typeof argv['--add-glyph'] !== 'undefined' && !argv['--add-glyph'])
            log.errorAndExit(1, 'Argument --add-glyph is empty.');
        else if (typeof argv['--add-glyph'] !== 'undefined') {
            if (!Array.isArray(argv['--add-glyph']))
                argv['--add-glyph'] = [argv['--add-glyph']];

            argv['--add-glyph'].forEach((glyph) => {
                if (!io.existsSync(glyph))
                    log.errorAndExit(1, `Glyph ${glyph} does not exist.`);
            });
        }

        // @todo - check if path's absolute path points to script dir or any of it's parent
        if (typeof argv['--add-glyph-directory'] !== 'undefined' && !argv['--add-glyph-directory'])
            log.errorAndExit(1, 'Argument --add-glyph-directory is empty.');
        else if (typeof argv['--add-glyph-directory'] !== 'undefined') {
            if (typeof argv['--add-glyph'] === 'undefined')
                argv['--add-glyph'] = [];

            if (!Array.isArray(argv['--add-glyph-directory']))
                argv['--add-glyph-directory'] = [argv['--add-glyph-directory']];

            argv['--add-glyph-directory'].forEach((dir) => {
                if (!io.existsSync(dir))
                    log.errorAndExit(1, `Directory ${dir} does not exist.`);

                argv['--add-glyph'] = argv['--add-glyph'].concat(io.globSync(io.resolve(dir) + '/*.svg'));
            });
        }

        if (typeof argv['--add-glyph'] !== 'undefined') {
            argv['--add-glyph'] = argv['--add-glyph'].map((glyph) => io.resolve(glyph));
            argv['--add-glyph'] = [...new Set(argv['--add-glyph'])];
            argv['--add-glyph'].sort();
        }
        // @todo - check if path's absolute path points to script dir or any of it's parent

        if (Array.isArray(argv['--tags']))
            argv['--tags'] = argv['--tags'].join(';');

        if (Array.isArray(argv['--export-ttf']))
            argv['--export-ttf'] = argv['--export-ttf'].pop();
        if (typeof argv['--export-ttf'] !== 'undefined' && !argv['--export-ttf'])
            log.errorAndExit(1, 'Argument --export-ttf is empty.');
        if (argv['--export-ttf'])
            argv['--export-ttf'] = io.resolve(argv['--export-ttf']);

        if (Array.isArray(argv['--export-woff']))
            argv['--export-woff'] = argv['--export-woff'].pop();
        if (typeof argv['--export-woff'] !== 'undefined' && !argv['--export-woff'])
            log.errorAndExit(1, 'Argument --export-woff is empty.');
        if (argv['--export-woff'])
            argv['--export-woff'] = io.resolve(argv['--export-woff']);

        if (Array.isArray(argv['--export-woff2']))
            argv['--export-woff2'] = argv['--export-woff2'].pop();
        if (typeof argv['--export-woff2'] !== 'undefined' && !argv['--export-woff2'])
            log.errorAndExit(1, 'Argument --export-woff2 is empty.');
        if (argv['--export-woff2'])
            argv['--export-woff2'] = io.resolve(argv['--export-woff2']);

        if (Array.isArray(argv['--export-eot']))
            argv['--export-eot'] = argv['--export-eot'].pop();
        if (typeof argv['--export-eot'] !== 'undefined' && !argv['--export-eot'])
            log.errorAndExit(1, 'Argument --export-eot is empty.');
        if (argv['--export-eot'])
            argv['--export-eot'] = io.resolve(argv['--export-eot']);
    }

    /**
     * Process register missing glyph argument.
     *
     * @return {Promise}
     */
    _processRegisterMissingGlyphArgument() {
        let filename = this._argv['--register-missing-glyph'];
        if (!filename)
            return Promise.resolve();

        return Promise.resolve()
            .then(() => io.readFile(filename))
            .then((content) => this._optimizer.optimize(content, this._fontBuilder.glyphSize))
            .then((content) => {
                if (this._optimizer.validate(content))
                    return Promise.resolve()
                        .then(() => log.info((this._fontBuilder.missingGlyphExists() ? 'Updating' : 'Appending') + ' missing glyph...'))
                        .then(() => this._fontBuilder.registerMissingGlyph(content));
                else
                    warning(`Can not optimize ${filename} for svg font, skipping file...`);
            });
    }

    /**
     * Process add glyph argument.
     *
     * @return {Promise}
     */
    _processAddGlyphArgument() {
        const argv = this._argv,
            addGlyph = argv['--add-glyph'],
            tags = argv['--tags'] || '';
        if (!addGlyph)
            return;

        return addGlyph.reduce((promise, filename) => {
            const glyph = io.parse(filename).name;

            return promise
                .then(() => io.readFile(filename))
                .then((content) => this._optimizer.optimize(content, this._fontBuilder.glyphSize))
                .then((content) => {
                    if (this._optimizer.validate(content))
                        return Promise.resolve()
                            .then(() => log.info((this._fontBuilder.glyphExists(glyph) ? 'Updating' : 'Appending') + ` glyph ${glyph}...`))
                            .then(() => this._fontBuilder.addGlyph(glyph, content, tags));
                    else
                        warning(`Can not optimize ${filename} for svg font, skipping file...`);
                });
        }, Promise.resolve());
    }

    /**
     * Process export ttf argument.
     *
     * @return {Promise}
     */
    _processExportTtfArgument() {
        const dst = this._argv['--export-ttf'];
        if (typeof dst === 'undefined')
            return Promise.resolve();

        return Promise.resolve()
            .then(() => log.info('Exporting ttf...'))
            .then(() => this._fontConverter.toTtf())
            .then((buffer) => io.writeFile(dst, buffer))
    }

    /**
     * Process export woff argument.
     *
     * @return {Promise}
     */
    _processExportWoffArgument() {
        const dst = this._argv['--export-woff'];
        if (typeof dst === 'undefined')
            return Promise.resolve();

        return Promise.resolve()
            .then(() => log.info('Exporting woff...'))
            .then(() => this._fontConverter.toWoff())
            .then((buffer) => io.writeFile(dst, buffer))
    }

    /**
     * Process export woff2 argument.
     *
     * @return {Promise}
     */
    _processExportWoff2Argument() {
        const dst = this._argv['--export-woff2'];
        if (typeof dst === 'undefined')
            return Promise.resolve();

        return Promise.resolve()
            .then(() => log.info('Exporting woff2...'))
            .then(() => this._fontConverter.toWoff2())
            .then((buffer) => io.writeFile(dst, buffer));
    }

    /**
     * Process export eof argument.
     *
     * @return {Promise}
     */
    _processExportEotArgument() {
        const dst = this._argv['--export-eot'];
        if (typeof dst === 'undefined')
            return Promise.resolve();

        return Promise.resolve()
            .then(() => log.info('Exporting eof...'))
            .then(() => this._fontConverter.toEot())
            .then((buffer) => io.writeFile(dst, buffer));
    }
};

// Module exports.
module.exports = {
    App,
};
