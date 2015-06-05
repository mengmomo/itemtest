/**
 * Created by meng on 2015/6/4.
 */
var config = {
    mangle: { except: ['define', 'require', 'module', 'exports'] },
    compress: false
};

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rjs = require('gulp-requirejs'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

gulp.task('minify-js',function(){
    rjs({
        name: '*',
        baseUrl: './app',
        out: 'app.js'
    })
    return gulp.src('app/*.js')
        .pipe(uglify(config))
        .pipe(gulp.dest('build'));
})

