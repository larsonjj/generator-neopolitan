'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer-core';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var entries = config.entries;
  let dest = path.resolve(taskTarget);

  // Less compilation
  gulp.task('less', () => {
    return gulp.src(path.join(dirs.source, entries.css))
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.less({
        paths: [
          path.resolve(dirs.source)
        ]
      }))
      .pipe(plugins.postcss([autoprefixer({browsers: ['last 2 version', '> 5%', 'safari 5', 'ios 6', 'android 4']})]))
      .pipe(plugins.rename(function(path) {
        // Remove 'source' directory
        // Ex: 'src/styles' --> '/styles'
        path.dirname = path.dirname.replace(dirs.source, '');
      }))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(dest))
      .pipe(browserSync.stream());
  });
}
