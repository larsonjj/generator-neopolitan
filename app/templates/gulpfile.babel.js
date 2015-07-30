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
const plugins = gulpLoadPlugins();
<% if (testFramework !== 'none') { %>
// Create karma server
const karma = require('karma').server;<% } %>

let config = pjson.config;
let argv = minimist(process.argv.slice(2));
let production = !!(argv.production);
let watch = !!(argv.watch);
let open = !!(argv.open);
let dirs = config.directories;
let taskTarget = production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
let browserSync = browserSyncLib.create();

<% if (cssOption === 'sass') { %>
// Sass compilation
gulp.task('sass', () => {
  let dest = path.join(__dirname, taskTarget);
  gulp.src(path.join(__dirname, dirs.source, '*.{scss,sass}'))
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
  return gulp.src(path.join(__dirname, dirs.source, '*.less'))
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
  gulp.src(path.join(__dirname, dirs.source, '*.styl'))
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
  let dest = path.join(__dirname, taskTarget, 'assets/images');
  return gulp.src(path.join(__dirname, dirs.source, 'assets/images/**/*.{jpg,jpeg,gif,svg,png}'))
    .pipe(plugins.changed(dest))
    .pipe(gulpif(production, plugins.imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant({speed: 10})]
    })))
    .pipe(gulp.dest(dest));
});

// Browserify Task

// Options
let customOpts = {
  entries: [path.join(__dirname, dirs.source, 'index.js')],
  debug: true,
  transform: [
    envify,   // Sets NODE_ENV for better optimization of npm packages
    babelify, // Enable ES6 features
    resolvify // Enable module resolving for custom folders
  ],
  fullPaths: true // for watchify
}

// Setup browserify
let b = browserify(customOpts);

if (!production) {
  // Setup Watchify for faster builds
  let opts = _.assign({}, watchify.args, customOpts);
  b = watchify(browserify(opts));
}

let browserifyTask = function() {
  let dest = path.join(__dirname, taskTarget);

  return b.bundle()
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
    .pipe(vsource(path.basename('index.js')))
    .pipe(buffer())
    .pipe(plugins.sourcemaps.init({loadMaps: true}))
      .pipe(gulpif(production, plugins.uglify()))
      .on('error', plugins.util.log)
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest(dest));
};

b.on('update', browserifyTask); // on any dep update, runs the bundler
b.on('log', plugins.util.log); // output build logs to terminal

gulp.task('browserify', browserifyTask);

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
      path.join(__dirname, dirs.source, 'assets/**/*'),
      '!' + path.join(__dirname, dirs.source, 'assets/images/**/*')
    ])
    .pipe(plugins.changed(dest))
    .pipe(gulp.dest(dest));
});

// Default task
gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

// Build production-ready code
gulp.task('build', [
  'copy',
  'imagemin',<% if (cssOption === 'less') { %>
  'less',<% } else if (cssOption === 'sass') { %>
  'sass',<% } else if (cssOption === 'stylus') { %>
  'stylus',<% } %>
  'browserify'
]);

// Server tasks with watch
gulp.task('serve', [
    'imagemin',
    'copy'<% if (jsOption === 'browserify') { %>,
    'browserify'<% } %><% if (cssOption === 'less') { %>,
    'less'<% } %><% if (cssOption === 'sass') { %>,
    'sass'<% } %><% if (cssOption === 'stylus') { %>,
    'stylus'<% } %>
  ], () => {

    browserSync.init({
      open: open ? 'local' : false,
      startPath: config.baseUrl,
      port: config.port || 3000,
      server: {
        baseDir: taskTarget,
        routes: (() => {
          let routes = {};

          // Map base URL to routes
          routes[config.baseUrl] = taskTarget;

          return routes;
        })()
      }
    });

    // If running in dev mode
    if (!production) {
<% if (cssOption === 'sass') { %>
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
        path.join(__dirname, dirs.source, 'assets/**/*'),
        '!' + path.join(__dirname, dirs.source, 'assets/images/**/*')
      ], ['copy']);

      // Images
      gulp.watch([
        path.join(__dirname, dirs.source, 'assets/images/**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin']);

      // All other files
      gulp.watch([
        path.join(__dirname, dirs.temporary, '**/*'),
        '!' + path.join(__dirname, dirs.temporary, '**/*.js')
      ]).on('change', browserSync.reload);

    }
  }
);

// Testing
gulp.task('test',<% if (testFramework === 'none') { %> ['eslint']);<% } else { %> (done) => {
  karma.start({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: !watch,
    autoWatch: watch
  }, done);
});<% } %>
