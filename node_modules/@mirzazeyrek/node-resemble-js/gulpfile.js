const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const gutil = require('gulp-util');

const srcFiles = 'resemble.js';
const specFiles = 'resemble.spec.js';

function runTests(breakOnError) {
  return gulp.src(specFiles)
    .pipe(jasmine({
      includeStackTrace: true
    }))
    .on('error', errorHandler(breakOnError));
}

function errorHandler(breakOnError) {
  return function(error) {
    if (breakOnError) {
      throw error;
    } else {
      gutil.log(gutil.colors.red('[Jasmine]'), error.toString());
      this.emit('end');
    }
  }
}

gulp.task('test', function() {
  return runTests(true);
});

gulp.task('test:auto', function() {
  runTests(false);

  return gulp.watch([srcFiles, specFiles], function() {
    runTests(false);
  });
});
