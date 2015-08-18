'use strict';
<% if (testFramework === 'mocha' || testFramework === 'jasmine') { %>
import path from 'path';<% } %>
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSyncLib from 'browser-sync';
import pjson from './package.json';
import minimist from 'minimist';
import wrench from 'wrench';

// Load all gulp plugins based on their names
// EX: gulp-copy -> copy
const plugins = gulpLoadPlugins();<% if (testFramework !== 'none') { %>
// Create karma server
const karma = require('karma').server;<% } %>

let config = pjson.config;
let args = minimist(process.argv.slice(2));
let dirs = config.directories;
let taskTarget = args.production ? dirs.destination : dirs.temporary;

// Create a new browserSync instance
let browserSync = browserSyncLib.create();

// This will grab all js in the `gulp` directory
// in order to load all gulp tasks
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(gulp, plugins, args, config, taskTarget, browserSync);
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
    singleRun: !args.watch,
    autoWatch: args.watch
  }, done);
});<% } %>
