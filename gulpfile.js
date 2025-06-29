const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function style() {
    return gulp.src('./src/css/*.scss')
    .pipe(sass({ outputStyle: 'campressed' }))
    .pipe(gulp.dest('./dist/css'));
}

exports.default = style;
exports.watch = function() {
    gulp.watch('./src/css/*.scss', gulp.parallel(style))
}