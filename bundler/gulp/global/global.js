const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const webpack = require('webpack-stream');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require("gulp-htmlmin");
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
var cssimport = require("gulp-cssimport");

module.exports = {
    gulp,
    sass,
    rename,
    webpack,
    htmlmin,
    cssnano,
    autoprefixer,
    imagemin,
    browserSync,
    cssimport,
    sourcemaps
}