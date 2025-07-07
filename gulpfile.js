const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function style() {
    return gulp.src('./src/css/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}
function optimizeImagens() {
    return gulp.src('./src/image/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/image'));
}

exports.default = gulp.series(
    gulp.parallel(style, optimizeImagens),
function watchFiles() {
    gulp.watch('./src/css/*.scss', style);
  }
);