'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;

  // Watch task
  gulp.task('watch', () => {
    if (!args.production) {<% if (cssOption === 'sass') { %>
      // Styles
      gulp.watch([
        path.join(__dirname, dirs.source, '**/*.{scss,sass}')
      ], ['sass']);<% } else if (cssOption === 'less') { %>
      gulp.watch([
        path.join(__dirname, dirs.source, '**/*.less')
      ], ['less']);<% } else if (cssOption === 'stylus') { %>
      gulp.watch([
        path.join(__dirname, dirs.source, '**/*.styl')
      ], ['stylus']);
      <% } %>

      // Copy
      gulp.watch([
        path.join(__dirname, dirs.source, 'index.html'),
        path.join(__dirname, dirs.source, dirs.assets, '**/*'),
        '!' + path.join(__dirname, dirs.source, dirs.assets, 'images/**/*')
      ], ['copy']);

      // Images
      gulp.watch([
        path.join(__dirname, dirs.source, dirs.assets, 'images/**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin']);

      // All other files
      gulp.watch([
        path.join(__dirname, dirs.temporary, '**/*')
      ]).on('change', browserSync.reload);
    }
  });
}
