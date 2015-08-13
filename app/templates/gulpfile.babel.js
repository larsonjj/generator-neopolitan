import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
import pjson from './package.json';
import minimist from 'minimist';
import pngquant from 'imagemin-pngquant';
import del from 'del';
import autoprefixer from 'autoprefixer-core';
import vsource from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import glob from 'glob';
import browserify from 'browserify';
import gulpif from 'gulp-if';
import envify from 'envify';
import babelify from 'babelify';
import resolvify from 'resolvify';
import watchify from 'watchify';
import _ from 'lodash';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();<% if (testFramework !== 'none') { %>
// Create karma server
const karma = require('karma').server;<% } %>

let config = pjson.config;
let argv = minimist(process.argv.slice(2));
let production = !!(argv.production);
let watch = !!(argv.watch);
let open = !!(argv.open);
let dirs = config.directories;
let entries = config.entries;
let taskTarget = production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
let browserSync = browserSyncLib.create();

<% if (cssOption === 'sass') { %>
// Sass compilation
gulp.task('sass', () => {
  let dest = path.join(__dirname, taskTarget);
  gulp.src(path.join(__dirname, dirs.source, entries.css))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: [path.join(__dirname, dirs.source) ]
    }).on('error', plugins.sass.logError))
    .pipe(plugins.postcss([autoprefixer({browsers: ['last 2 version', '> 5%', 'safari 5', 'ios 6', 'android 4']})]))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});<% } else if (cssOption === 'less') { %>

// Less compilation
gulp.task('less', () => {
  let dest = path.join(__dirname, taskTarget);
  return gulp.src(path.join(__dirname, dirs.source, entries.css))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      paths: [path.join(__dirname, dirs.source)]
    }))
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});<% } else if (cssOption === 'stylus') { %>

// Stylus compilation
gulp.task('stylus', () => {
  let dest = path.join(__dirname, taskTarget);
  gulp.src(path.join(__dirname, dirs.source, entries.css))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.stylus({
      compress: true,
      'inline css': true
    }))
    .pipe(plugins.postcss([autoprefixer({browsers: ['ie >= 9']})]))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});<% } %>

// ESLint
gulp.task('eslint', () => {
  gulp.src([
    path.join(__dirname, 'gulpfile.js'),
    path.join(__dirname, dirs.source, '**/*.js'),
    // Ignore all vendor folder files
    '!' + path.join(__dirname, '**/vendor/**', '*')
  ])
  .pipe(browserSync.reload({stream: true, once: true}))
  .pipe(plugins.eslint({
    useEslintrc: true
  }))
  .pipe(plugins.eslint.format())
  .pipe(plugins.if(!browserSync.active, plugins.eslint.failAfterError()));
});

// Imagemin
gulp.task('imagemin', () => {
  let dest = path.join(__dirname, taskTarget, dirs.assets, 'images');
  return gulp.src(path.join(__dirname, dirs.source, dirs.assets, 'images/**/*.{jpg,jpeg,gif,svg,png}'))
    .pipe(plugins.changed(dest))
    .pipe(gulpif(production, plugins.imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant({speed: 10})]
    })))
    .pipe(gulp.dest(dest));
});

// Browserify Task
let browserifyTask = function(entry) {
  let dest = path.join(__dirname, taskTarget);
  let customOpts = {
    entries: [entry],
    debug: true,
    transform: [
      envify,  // Sets NODE_ENV for better optimization of npm packages
      babelify, // Enable ES6 features
      resolvify // Allow for require()'s to search for custom folders other than node_modules
    ]
  };

  let bundler = browserify(customOpts);

  if (!production) {
    // Setup Watchify for faster builds
    let opts = _.assign({}, watchify.args, customOpts);
    bundler = watchify(browserify(opts));
  }

  let rebundle = function() {
    let startTime = new Date().getTime();
    bundler.bundle()
      .on('error', function (err) {
        plugins.util.log(
          plugins.util.colors.red("Browserify compile error:"),
          err.message,
          '\n\n',
          err.codeFrame,
          '\n'
        );
        this.emit('end');
      })
      .pipe(vsource(path.basename(entry)))
      .pipe(buffer())
      .pipe(plugins.sourcemaps.init({loadMaps: true}))
        .pipe(gulpif(production, plugins.uglify()))
        .on('error', plugins.util.log)
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(dest))
      .on('end', function() {
        let time = (new Date().getTime() - startTime) / 1000;
        return console.log(
          plugins.util.colors.cyan(entry)
          + " was browserified: "
          + plugins.util.colors.magenta(time + 's'));
      });
  };

  if (!production) {
    bundler.on('update', browserifyTask); // on any dep update, runs the bundler
    bundler.on('log', plugins.util.log); // output build logs to terminal
  }
  return rebundle();
};

gulp.task('browserify', function(done) {
  return glob(path.join(__dirname, dirs.source, entries.js), function(err, files) {
    if(err) done(err);
    return files.map(function(entry) {
      return browserifyTask(entry)
    });
  });
});

// Default task
gulp.task('watch', () => {
  if (!production) {<% if (cssOption === 'sass') { %>
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

// Clean
gulp.task('clean', del.bind(null, [
  path.join(__dirname, dirs.temporary),
  path.join(__dirname, dirs.destination)
]));

// Serve
gulp.task('copy', () => {
  let dest = path.join(__dirname, taskTarget);
  return gulp.src([
      path.join(__dirname, dirs.source, 'index.html'),
      path.join(__dirname, dirs.source, dirs.assets, '**/*'),
      '!' + path.join(__dirname, dirs.source, dirs.assets, 'images/**/*')
    ])
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest));
});

// BrowserSync
gulp.task('browserSync', () => {
  browserSync.init({
    open: open ? 'local' : false,
    startPath: config.baseUrl,
    port: config.port || 3000,
    server: {
      baseDir: taskTarget
    }
  });
});

// Default task
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

// Build production-ready code
gulp.task('build', [
  'copy',
  'imagemin'<% if (cssOption === 'less') { %>,
  'less'<% } else if (cssOption === 'sass') { %>,
  'sass'<% } else if (cssOption === 'stylus') { %>,
  'stylus'<% } %>,
  'browserify',
  'browserSync'
]);

// Server tasks with watch
gulp.task('serve', [
    'imagemin',
    'copy'<% if (cssOption === 'less') { %>,
    'less'<% } %><% if (cssOption === 'sass') { %>,
    'sass'<% } %><% if (cssOption === 'stylus') { %>,
    'stylus'<% } %>,
    'browserify',
    'browserSync',
    'watch'
]);

// Testing
gulp.task('test',<% if (testFramework === 'none') { %> ['eslint']);<% } else { %> (done) => {
  karma.start({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: !watch,
    autoWatch: watch
  }, done);
});<% } %>
