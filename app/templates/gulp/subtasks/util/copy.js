// Copy task
// Copies files and directories

var path = require('path');

var copyTask = function copyTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var plugins = options.plugins;
  var rootPath = options.rootPath;
  var source = [
    path.join(rootPath, dirs.source, '**/*'),
    path.join('!', rootPath, dirs.source, '{**/\_*,**/\_*/**}')
  ];

  // Serve
  gulp.task('copy:serve', function() {
    var dest = path.join(rootPath, dirs.temporary);
    return gulp.src(source)
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });

  // Build
  gulp.task('copy:build', function() {
    var dest = path.join(rootPath, dirs.destination);
    return gulp.src(source)
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });
};

module.exports = copyTask;
