// Serve task
// Boot-up development server

var buildTask = function buildTask(options) {
  var gulp = options.gulp;

  // Main task
  gulp.task('build', ['clean:build'], function() {
    gulp.start('build:tasks');
  });

  // Build production-ready code
  gulp.task('build:tasks', [
    'copy:build',
    'imagemin:build',<% if (cssOption === 'less') { %>
    'less:build',<% } else if (cssOption === 'sass') { %>
    'sass:build',<% } else if (cssOption === 'stylus') { %>
    'stylus:build',<% } %>
    'browserify:build'
  ], function() {
    gulp.start('clean:tmp'); // Cleanup any tmp files
  });

};

module.exports = buildTask;
