var gulp = require('gulp');
var git = require('gulp-git');

// Run git init
// src is the root folder for git to initialize
gulp.task('diff', function(){
    return gulp.src('./rjs', { cwd: '../static-meal' })
        .pipe(git.diff('master', {log: true}))
        .pipe(gulp.dest('./dist/diff.out'));
});
