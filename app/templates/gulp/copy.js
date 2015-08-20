'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  let dest = path.join(taskTarget);

  // Copy
  gulp.task('copy', () => {
    return gulp.src([
        path.join(dirs.source, 'index.html'),
      path.join(dirs.source, dirs.assets, '**/*'),
      // Ignore images folder as it is handled by imagemin task
      '!' + path.join(dirs.source, dirs.assets, 'images/**/*')
      ])
      .pipe(plugins.changed(dest))
      .pipe(gulp.dest(dest));
  });
}
