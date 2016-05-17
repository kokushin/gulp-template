'use strict';

var gulp          = require('gulp'),
    fs            = require('fs'),
    ejs           = require('gulp-ejs'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    cleanCss      = require('gulp-clean-css'),
    uglify        = require('gulp-uglify'),
    imagemin      = require('gulp-imagemin'),
    pngquant      = require('imagemin-pngquant'),
    plumber       = require('gulp-plumber'),
    webpack       = require('gulp-webpack'),
    webpackConfig = require('./webpack.config.js'),
    runSequence   = require('run-sequence'),
    browserSync   = require('browser-sync').create();


/**
 * develop task
 */

gulp.task('ejs', function() {
  var json = JSON.parse(fs.readFileSync('./src/ejs/config.json'));
  gulp.src(['./src/ejs/pages/**/*.ejs'])
      .pipe(plumber())
      .pipe(ejs(json, {'ext': '.html'}))
      .pipe(gulp.dest('./src/www'));
});

gulp.task('sass', function() {
  gulp.src(['./src/sass/**/*.scss'])
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest('./src/www/assets/css'));
});

gulp.task('webpack', function() {
  gulp.src(['./src/js/**/*.js'])
      .pipe(plumber())
      .pipe(webpack(webpackConfig))
      .pipe(gulp.dest('./src/www/assets/js'));
});

gulp.task('watch', function() {
  gulp.watch('./src/ejs/**/*.ejs', ['ejs']).on('change', browserSync.reload);
  gulp.watch('./src/sass/**/*.scss', ['sass']).on('change', browserSync.reload);
  gulp.watch('./src/js/**/*.js', ['webpack']);
});

gulp.task('connect', function() {
  browserSync.init({
    server: './src/www',
    index: 'index.html',
    notify: false
  });
});

gulp.task('default', ['connect', 'watch']);


/**
 * build task
 */

gulp.task('minify', function() {
  return runSequence(
    'copy',
    'minifyCss',
    'minifyJs',
    'minifyImg'
  );
});

gulp.task('copy', function() {
  return gulp.src(['./src/www/**'], {base: './src/www'})
             .pipe(gulp.dest('./build'));
});

gulp.task('minifyCss', function() {
  gulp.src(['./build/assets/css/**/*'])
      .pipe(plumber())
      .pipe(cleanCss({compatibility: 'ie8'}))
      .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('minifyJs', function() {
  gulp.src(['./build/assets/js/**/*'])
      .pipe(plumber())
      .pipe(uglify({preserveComments: 'license'}))
      .pipe(gulp.dest('./build/assets/js'));
});

gulp.task('minifyImg', function() {
  return gulp.src(['./build/assets/img/**/*'])
             .pipe(plumber())
             .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
             }))
             .pipe(gulp.dest('./build/assets/img'));
});

gulp.task('build', ['minify']);