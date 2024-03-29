let mix  = require('laravel-mix');
const del = require('del');
require('laravel-mix-ejs');

// Define the public and resources paths
mix.setPublicPath('dist');
mix.setResourceRoot('../');

// Compile assets
mix.sass('src/scss/ui.scss', 'dist/css/ui.css').sourceMaps();
mix.sass('src/scss/ui-reboot.scss', 'dist/css/reboot.css').sourceMaps();
mix.sass('src/scss/ui-grid.scss', 'dist/css/grid.css').sourceMaps();
mix.js('src/js/ui.js', 'dist/js/ui.js');
mix.js('src/tests/tests.js', 'dist/tests/tests.js');

// Copy fonts
mix.copyDirectory('src/fonts', 'dist/fonts');

// Test UI
mix.sass('src/tests/scss/tests.scss', 'dist/tests');
mix.ejs('src/tests/index.ejs', 'dist/tests');
mix.ejs('src/tests/bootstrap.ejs', 'dist/tests');
mix.ejs('src/tests/icons.ejs', 'dist/tests');
mix.ejs('src/tests/font-awesome.ejs', 'dist/tests');
