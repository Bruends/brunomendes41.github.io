'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const uglifyCss = require('gulp-uglifycss');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// compila sass para css,
// coloca os prefixos para maior compatibilidade crossbrowser,
// minifica
gulp.task('sass', () => {
  return gulp.src('./sass/*.scss')
  .pipe(sass().on('error', (err) => { console.log(err); }))
  .pipe(autoprefixer())
  .pipe(uglifyCss())
  .pipe(gulp.dest('./dist/css'));
});

// "transpila" es6 para es5
// minifica e concatena o js
gulp.task('js', () => {
  return gulp.src('./js/*.js')
  .pipe(concat('dist.js'))
  .pipe(babel({ presets : ['env'] }).on('error', (err) => {console.log(err)}))  
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('bs-reload', (done) => {
  browserSync.reload();
  done();
})

// browser sync
gulp.task('browser-sync', () => {
  browserSync.init(['index.html', 'css/style.css'], {
    server: {
      baseDir: './'
    }
  });

  gulp.watch(['./sass/*.scss', './js/*.js'], ['sass', 'js', 'bs-reload']); 
});

// browser-sync server:  http://localhost:3000
gulp.task('default', ['sass', 'js', 'browser-sync']);

