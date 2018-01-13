const gulp = require('gulp')
const concatCss = require('gulp-concat-css');
const autoprefixer = require('gulp-autoprefixer');
const uglifyCss = require('gulp-uglifycss');

const cssPaths = [
  'style/animations.css',
  'style/style.css',
  'style/responsive.css'
]

// otimiza e adiciona prefixos no css
gulp.task('default', () => {
  return gulp.src(cssPaths)
  .pipe(concatCss(''))
  .pipe(autoprefixer())
  .pipe(uglifyCss())
  .pipe(gulp.dest('dist/style.min.css'));
});