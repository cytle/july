const gulp = require('gulp');
const git = require('gulp-git');
const path = require('path');
const eslint = require('gulp-eslint');
const debug = require('gulp-debug');

const distDir = path.resolve(__dirname, './dist/d');

gulp.task('diff', function(){
    const src = path.resolve(process.cwd(), 'rjs/**');
    return gulp.src(src)
        .pipe(git.diff('master'))
        .pipe(debug({ title: 'diff:' }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(gulp.dest(distDir));
});
