// Serve task
// Boot-up development server

// Help to ensure tasks run in order
var runSequence = require('run-sequence');
var path = require('path');

var testTask = function testTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var rootPath = options.rootPath;

  // Testing
  gulp.task('test', function() {
    runSequence('eslint', 'browserify:test', 'karma:unit');
  });

  gulp.task('test:watch', function() {
    runSequence('eslint', 'browserify:test', 'karma:unitWatch');
    gulp.watch([
      path.join(rootPath, dirs.source, '**/*.js')
    ], ['browserify:test']);
  });<% if (useE2e) { %>

  gulp.task('test:e2e', function() {
    runSequence('eslint', 'clean:tmp', 'serve:tasks:test', 'protractor');
  });<% } %>

};

module.exports = testTask;
