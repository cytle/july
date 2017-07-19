const gulp = require('gulp');
const git = require('gulp-git');
const path = require('path');
const eslint = require('gulp-eslint');
const debug = require('gulp-debug');

gulp.task('diff', function(){
    const src = path.resolve(process.cwd(), '**');
    return gulp.src(src)
        // .pipe(git.diff('master'))
        // .pipe(debug({ title: 'diff:' }))
        .pipe(eslint({
            useEslintrc: false,
            configFile: path.resolve(__dirname, '.eslintrc.js')
        }))
        .pipe(eslint.format())
        .pipe(eslint.results(results => {
            // Called once for all ESLint results.
            console.log(`Total Results: ${results.length}`);
            console.log(`Total Warnings: ${results.warningCount}`);
            console.log(`Total Errors: ${results.errorCount}`);
        }));
});
