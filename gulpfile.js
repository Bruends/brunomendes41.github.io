const gulp = require('gulp')
const concatCss = require('gulp-concat-css');
const autoprefixer = require('gulp-autoprefixer');
const uglifyCss = require('gulp-uglifycss');
var browserSync = require('browser-sync').create();

const cssPaths = [
  'style/style.css',
  'style/animations.css',
  'style/responsive.css'
]

// otimiza e adiciona prefixos no css
gulp.task('css', () => {
  return gulp.src(cssPaths)
  .pipe(concatCss(''))
  .pipe(autoprefixer())
  .pipe(uglifyCss())
  .pipe(gulp.dest('dist/style.min.css'));
});

gulp.task('default', () => {
  gulp.watch('./style/*.css', ['css']);
});
