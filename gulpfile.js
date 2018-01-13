const gulp = require('gulp')
const concatCss = require('gulp-concat-css');
const autoprefixer = require('gulp-autoprefixer');
const uglifyCss = require('gulp-uglifycss');

// otimiza e adiciona prefixos no css
gulp.task('default', () => {
  return gulp.src('./style/*.css')
  .pipe(concatCss(''))
  .pipe(autoprefixer())
  .pipe(uglifyCss())
  .pipe(gulp.dest('dist/style.min.css'));
});