const gulp = require('gulp');
const git = require('gulp-git');
const path = require('path');
const eslint = require('gulp-eslint');
const debug = require('gulp-debug');
const config = {
  source: '',
  target: 'master',

};

gulp.task('diff', function(){
    const src = path.resolve(process.cwd(), '**');
    return gulp.src(src)
        .pipe(git.diff('master', {log: true}))
        .pipe(gulp.dest(path.resolve(__dirname, './diff.out')));
        // // .pipe(debug({ title: 'diff:' }))
        // .pipe(eslint({
        //     useEslintrc: false,
        //     configFile: path.resolve(__dirname, '.eslintrc.js')
        // }))
        // .pipe(eslint.format())
        // .pipe(eslint.results(results => {
        //     // Called once for all ESLint results.
        //     console.log(`Total Results: ${results.length}`);
        //     console.log(`Total Warnings: ${results.warningCount}`);
        //     console.log(`Total Errors: ${results.errorCount}`);
        // }));
});
