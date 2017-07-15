// Dependencies
var GitStats = require("git-stats");
var gulp = require("gulp");
require("./gulpfile");

// Create the GitStats instance
var g1 = new GitStats();

process.chdir('../static-meal');

gulp.start('diff');

// // Display the ansi calendar
// g1.ansiCalendar({
//     theme: "DARK"
// }, function (err, data) {
//     console.log(err || data);
// });


// process.cwd()，process.chdir()
