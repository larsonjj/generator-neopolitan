'use strict';

import path from 'path';
import gulpif from 'gulp-if';
import pngquant from 'imagemin-pngquant';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  let dest = path.resolve(taskTarget, dirs.assets, 'images');

  // Imagemin
  gulp.task('imagemin', () => {
    return gulp.src(path.join(dirs.source, dirs.assets, 'images/**/*.{jpg,jpeg,gif,svg,png}'))
      .pipe(plugins.changed(dest))
      .pipe(gulpif(args.production, plugins.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant({speed: 10})]
      })))
      .pipe(gulp.dest(dest));
  });
}
