/**
 * Created by meng on 2015/6/4.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify');
gulp.task('minify-js',function(){
    return gulp.src('app/*.js')
        .pipe('uglify')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build'));
})