let mix = require('laravel-mix');

// Define the public and resources paths
mix.setPublicPath('dist');
mix.setResourceRoot('../');

// Compile assets
mix.sass('scss/ui.scss', 'dist/css/ui.css')
    .sourceMaps();

mix.sass('scss/ui-reboot.scss', 'dist/css/reboot.css')
    .sourceMaps();

mix.sass('scss/ui-grid.scss', 'dist/css/grid.css')
    .sourceMaps();

// Copy fonts
mix.copyDirectory('fonts', 'dist/fonts');
