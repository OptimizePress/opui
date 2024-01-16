#!/usr/bin/env nodejs

// npm install --save-dev \
//     cheerio \
//     download \
//     node-fetch@2.6.6 \
//     oslllo-svg-fixer@2.2.0 \
//     piscina@3.2.0 \
//     svg2ttf \
//     svgo \
//     svgpath \
//     tmp \
//     ttf2eot \
//     ttf2woff \
//     ttf2woff2 \
//     zip-lib

// Import module(s).
const log = require('./lib/log');
const {App} = require('./lib/app');

// Init CLI App.
let status = 0;
const app = new App();

// Start CLI App.
app
    .start()
    .catch((ex) => {
        status = 1;
        log.error(ex);
    })
    .finally(() => {
        app.destroy();
        process.exit(status);
    });
