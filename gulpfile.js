const autoPrefixer = require('autoprefixer');
const gulp = require('gulp');
const postCss = require('gulp-postcss');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const pump = require('pump');

const scssAssets = [
  'src/**/*.scss'
];

// Tasks
gulp.task('sass:compile', function (cb) {
  pump([
    gulp.src(scssAssets),
    sass({
      includePaths: ['node_modules/bootstrap/scss/'],
      outputStyle: 'compressed'
    }),
    postCss([autoPrefixer()]),
    rename({
      suffix: '.min'
    }),
    gulp.dest(function (file) {
      return file.base;
    })
  ], cb);
});

gulp.task('default', gulp.parallel('sass:compile'));

//Watch
gulp.task('all:watch', function () {
  gulp.watch(scssAssets, gulp.parallel('sass:compile'));
});

gulp.task('sass:watch', function () {
  gulp.watch(scssAssets, gulp.parallel('sass:compile'));
});
