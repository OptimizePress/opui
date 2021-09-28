# OptimizePress UI

This package contains all the global styles and scripts used throughout OptimizePress plugins.

It contains Bootstrap 4 and FontAwesome 4, but all the class names are prefixed with 'opui-', so to use bootstrap you need to prefix it in you HTML:

    <a href="#" class="opui-btn opui-btn-primary>Button example</a>

Or to use FontAwesome:

    <i class="opui-fa opui-anchor"></i>

## Installation

To install the package you need to run the following command **(NOT YET TESTED!)**:

    npm install git+https://github.com/OptimizePress/opui.git

## WordPress

To use the package inside an OptimizePress plugin, the best way is to use Laravel Mix and the sass-loader. So your **webpack.mix.js** should contain this:

    let mix = require('laravel-mix');
    mix.sass('resources/scss/app.scss', 'public/assets/css')
    mix.js(['resources/js/app.js'], 'public/assets/js')

Inside your **app.scss** you simply need to include the UI like this **(THE IMPORT PATH WILL BE CHANGED WHEN PACKAGE IS READY)**:

    $opui-wrapper: '#wpbody';
    @import '../vendor/opui/src/scss/ui';

The **$opui-wrapper** is required because WordPress loads some style of its own, and to keep everything consistent we need to wrap all the classes.

## Build

Building is required only if you want to contribute to the package. Otherwise, just use the package as described in the WordPress section.

To build all you required assets inside the package you need to run:

    npm run dev

Or:

    npm run watch

Keep in mind that upon running the command the first time, you will most likely get an error message regarding the sass loader.
This is due to the fact that Laravel Mix requires different versions of the loader depending on your node.js version,
so the correct version will be installed when running the command for the first time.

After that you simply need to run the command one more time, and it should all be good.

## Scripts

The only script included for now is toggling the fullscreen mode in WordPress plugins. This is achieved by toggling a body class.
An example on how to use the script can be found in the **tests** directory:

    import {toggleFullscreen} from "../js/fullscreen";

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.opui-fullscreen-btn').addEventListener('click', function (event) {
            event.preventDefault();
            toggleFullscreen('https://jsonplaceholder.typicode.com/posts/1');
        }, false);
    });

The function accepts an attribute for an API endpoint URL. This endpoint should be used to store the current fullscreen state.

## Contributing

To contribute to the package, simply clone the repository, make you changes, build the assets, and make a pull request.

Ideally you need to visit the test screens and watch if something is broken before sending the PR.
