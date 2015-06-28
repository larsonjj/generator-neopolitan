// Serve task
// Boot-up development server

// Help to ensure tasks run in order
var runSequence = require('run-sequence');
var path = require('path');

var serveTask = function serveTask(options) {
  var gulp = options.gulp;
  var config = options.config;
  var dirs = config.directories;
  var rootPath = options.rootPath;
  var browserSync = options.browserSync;

  // Main task
  gulp.task('serve', ['clean:tmp'], function() {
    gulp.start('serve:tasks:dev');
  });

  gulp.task('serve:build', ['clean:build'], function() {
    runSequence('build:tasks', 'serve:tasks:prod');
  });

  // Server tasks
  gulp.task('serve:tasks:prod', function() {
    browserSync.init({
      startPath: config.baseUrl,
      server: {
        baseDir: dirs.destination,
        routes: (function() {
          var routes = {};

          // Map base URL to routes
          routes[config.baseUrl] = dirs.destination;

          return routes;
        })()
      }
    });
  });

  // Server tasks with watch
  gulp.task('serve:tasks:dev', [
      'imagemin:serve',
      'copy:serve'<% if (jsOption === 'browserify') { %>,
      'browserify:serve'<% } %><% if (cssOption === 'less') { %>,
      'less:serve'<% } %><% if (cssOption === 'sass') { %>,
      'sass:serve'<% } %><% if (cssOption === 'stylus') { %>,
      'stylus:serve'<% } %>
    ], function() {

      browserSync.init({
        startPath: config.baseUrl,
        server: {
          baseDir: dirs.temporary,
          routes: (function() {
            var routes = {};

            // Map base URL to routes
            routes[config.baseUrl] = dirs.temporary;

            return routes;
          })()
        }
      });
<% if (cssOption === 'sass') { %>
      // Styles
      gulp.watch([
        path.join(rootPath, dirs.source, dirs.styles, '**/*.{scss,sass}')
      ], ['sass:serve']);<% } else if (cssOption === 'less') { %>
      gulp.watch([
        path.join(rootPath, dirs.source, dirs.styles, '**/*.less')
      ], ['less:serve']);<% } else if (cssOption === 'stylus') { %>
      gulp.watch([
        path.join(rootPath, dirs.source, dirs.styles, '**/*.styl')
      ], ['stylus:serve']);
      <% } %>

      // Copy
      gulp.watch([
        path.join(rootPath, dirs.source, '**/*'),
        path.join('!', rootPath, dirs.source, '{**/\_*,**/\_*/**}')
      ], ['copy:serve']);

      // Scripts
      gulp.watch([
        path.join(rootPath, dirs.source, '**/*.<% if (jsFramework === 'react') { %>{js,jsx}<% } else { %>js<% } %>')
      ], ['browserify:serve']);

      // Images
      gulp.watch([
        path.join(rootPath, dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin:serve']);

      // All other files
      gulp.watch([
        path.join(rootPath, dirs.temporary, '**/*')
      ]).on('change', browserSync.reload);

  });

};

module.exports = serveTask;
