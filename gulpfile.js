var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');
var watch = require('gulp-watch');

gulp.task('watchgrid', function() {
    return gulp.src('src/grid.less')
        .pipe(watch('src/grid.less'))
        .pipe(less())
        .pipe(gulp.dest('static/css/'));
});

gulp.task('watchstyle', function() {
    return gulp.src('src/style.less')
        .pipe(watch('src/style.less'))
        .pipe(less())
        .pipe(gulp.dest('static/css/'));
});

gulp.task('watchless', ['watchgrid', 'watchstyle'])
