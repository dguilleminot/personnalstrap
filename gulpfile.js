'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var wait = require('gulp-wait');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  console.log('hello from gulp sass');
  return gulp.src('./sass/index.scss')
    .pipe(wait(200))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'))
});

gulp.task('sass:watch', function () {
  gulp.watch('./**/*.scss', ['sass']);
});
