/**
 * Log info.
 *
 * @param  {...String} msg
 * @return {Void}
 */
const info = function(...msg) {
    console.info('\x1b[0m', ...msg, '\x1b[0m');
}

/**
 * Log warning.
 *
 * @param  {...String} msg
 * @return {Void}
 */
const warning = function(...msg) {
    console.warn('\x1b[33m', ...msg, '\x1b[0m');
}

/**
 * Log error.
 *
 * @param  {...String} msg
 * @return {Void}
 */
const error = function(...msg) {
    console.error('\x1b[31m', ...msg, '\x1b[0m');
}

module.exports = {
    info,
    warning,
    error,
}
