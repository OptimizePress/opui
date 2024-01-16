// Import module(s).
const fs = require('fs-extra');
const globby = require('globby');
const nodeDownload = require('download');
const fetch = require('node-fetch');
const { basename, dirname, parse, resolve } = require('path');
const { homedir, tmpdir } = require('os');
const zipLib = require('zip-lib');

/**
 * User-friendly glob matching.
 *
 * @param  {Array}   patterns
 * @param  {Object}  options
 * @return {Promise}
 */
const glob = (patterns, options={}) => {
    return globby(patterns, options)
        .then((files) => files.map(file => resolve(file)))
        .then((files) => files.sort((a, b) => a.localeCompare(b)));
};

/**
 * User-friendly glob matching.
 *
 * @param  {Array}   patterns
 * @param  {Object}  options
 * @return {Promise}
 */
const globSync = (patterns, options={}) => {
    return globby.sync(patterns, options)
        .map((file) => resolve(file))
        .sort((a, b) => a.localeCompare(b));
};

/**
 * Read file content.
 *
 * @param  {String}  path
 * @return {Promise}
 */
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { encoding: 'utf-8' }, (err, content) => !err ? resolve(content.toString()) : reject(err));
    });
};

/**
 * Read file content.
 *
 * @param  {String} path
 * @return {String}
 */
const readFileSync = (path) => {
    let content = fs.readFileSync(path, { encoding: 'utf-8' });

    return content.toString();
};

/**
 * Read URL content.
 *
 * @param  {String}  url
 * @return {Promise}
 */
const readUrl = (url) => {
    return fetch(url)
        .then((response) => {
            if (response.ok)
                return response.text();

            throw response.status + ' ' + response.statusText;
        });
};

/**
 * Write content to file.
 *
 * @param  {String}  path
 * @param  {String}  content
 * @return {Promise}
 */
const writeFile = (path, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, { encoding: 'utf-8' }, err => !err ? resolve(content) : reject(err));
    });
};

/**
 * Write data to config file.
 *
 * @param  {String}  path
 * @param  {String}  content
 * @return {Void}
 */
const writeFileSync = (path, content) => {
    fs.writeFileSync(path, content);
};

/**
 * Path exists.
 *
 * @param  {String}  path
 * @return {Promise}
 */
const exists = (path) => {
    return new Promise((resolve, reject) => {
        fs.exists(path, (exists) => {
            resolve(exists);
        });
    });
};

/**
 * Path exists.
 *
 * @param  {String}  path
 * @return {Boolean}
 */
const existsSync = (path) => {
    return fs.existsSync(path);
};

const lstat = (path) => {
    return new Promise((resolve, reject) => {
        fs.lstat(path, (err, stats) => {
            if (!err)
                resolve({
                    isFile: stats.isFile(),
                    isDirectory: stats.isDirectory(),
                    isSymbolicLink: stats.isSymbolicLink(),
                    isFIFO: stats.isFIFO(),
                    isSocket: stats.isSocket(),
                    isCharacterDevice: stats.isCharacterDevice(),
                    isBlockDevice: stats.isBlockDevice(),
                });
            else
                reject(err);
        });
    });
};

const lstatSync = (path) => {
    try {
        let stats = fs.lstatSync(path);

        return {
            isFile: stats.isFile(),
            isDirectory: stats.isDirectory(),
            isSymbolicLink: stats.isSymbolicLink(),
            isFIFO: stats.isFIFO(),
            isSocket: stats.isSocket(),
            isCharacterDevice: stats.isCharacterDevice(),
            isBlockDevice: stats.isBlockDevice(),
        };
    } catch (e) {
        return null;
    }
};

/**
 * Unlink (delate) path.
 *
 * @param  {String}  path
 * @return {Promise}
 */
const unlink = (path) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => !err ? resolve() : reject());
    })
};

/**
 * Unlink (delate) path.
 *
 * @param  {String} path
 * @return {Void}
 */
const unlinkSync = (path) => {
    fs.unlinkSync(path);
}

/**
 * Remove directory.
 *
 * @param  {String}  path
 * @param  {Object}  options
 * @return {Promise}
 */
const rmdir = (path, options={}) => {
    // @todo - options not implemented on older node versions

    return new Promise((resolve, reject) => {
        fs.rmdir(path, (err) => !err ? resolve() : reject(new Error(err.errno + ' ' + err.code)));
    });
};

/**
 * Remove directory.
 *
 * @param  {String} path
 * @param  {Object} options
 * @return {Void}
 */
const rmdirSync = (path, options={}) => {
    // @todo - options not implemented on older node versions

    fs.rmdirSync(path, options);
};

/**
 * Copy file.
 *
 * @param  {String}  src
 * @param  {String}  dst
 * @return {Promise}
 */
const copy = (src, dst) => {
    return fs.copy(src, dst);
};

/**
 * Copy file.
 *
 * @param  {String} src
 * @param  {String} dst
 * @return {Void}
 */
const copySync = (src, dst) => {
    return fs.copySync(src, dst);
};

/**
 * Delete given file or directory. All the files inside a directory are
 * deleted. If the given file or directory does not exist the function
 * will do nothing.
 *
 * @param  {String}  path
 * @return {Promise}
 */
const remove = (path) => {
    return new Promise((resolve, reject) => {
        fs.remove(path, (err) => !err ? resolve() : reject(new Error(err.errno + ' ' + err.code)));
    });
}

/**
 * Delete given file or directory. All the files inside a directory are
 * deleted. If the given file or directory does not exist the function
 * will do nothing.
 *
 * @param  {String}  path
 * @return {Void}
 */
const removeSync = (path) => {
    fs.remove(path);
}

/**
 * Download file.
 *
 * @param  {String}  src
 * @param  {String}  dst
 * @return {Promise}
 */
const download = (src, dst) => {
    return nodeDownload(src, null)
        .then((buffer) => writeFile(dst, buffer))
        .then(() => dst);
};

/**
 * Archive multiple files and directories into zip archive.
 *
 * @param  {Array}   patterns
 * @param  {String}  dst
 * @param  {String}  cwd
 * @param  {String}  dstPrefix
 * @return {Promise}
 */
const zip = (patterns, dst, cwd=null, dstPrefix=null) => {
    let zip = new zipLib.Zip();

    return Promise.resolve()
        .then(() => glob(patterns, { cwd: cwd }))
        .then((files) => {
            return files.reduce((promise, path) => {
                let meta = ''
                    + (dstPrefix ? dstPrefix.replace(/\/$/g, '') + '/' : '')
                    + path.substr(cwd.length + 1);

                return promise
                    .then(() => lstat(path))
                    .then((stats) => stats.isFile ? zip.addFile(path, meta) : null)
            }, Promise.resolve());
        })
        .then(() => zip.archive(dst))
        .then(() => dst);
};

// Module exports.
module.exports = {
    basename,
    dirname,
    parse,
    resolve,
    glob,
    globSync,
    readFile,
    readFileSync,
    readUrl,
    writeFile,
    writeFileSync,
    exists,
    existsSync,
    lstat,
    lstatSync,
    unlink,
    unlinkSync,
    rmdir,
    rmdirSync,
    copy,
    copySync,
    remove,
    removeSync,
    homedir,
    tmpdir,
    fetch,
    download,
    zip,
};
