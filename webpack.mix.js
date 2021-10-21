const mix = require('laravel-mix');
const {copy} = require("laravel-mix");

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/scss/main.scss', 'public/css')
    .copy('resources/views/*.php', 'public');