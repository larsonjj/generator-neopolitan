'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;

var ScreenGenerator = module.exports = function ScreenGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.projectName = fileJSON.projectName;
  this.jsFramework = fileJSON.jsFramework;
  this.jsOption = fileJSON.jsOption;
  this.cssOption = fileJSON.cssOption;
  this.sassSyntax = fileJSON.sassSyntax;
  this.testFramework = fileJSON.testFramework;

};

util.inherits(ScreenGenerator, yeoman.generators.NamedBase);

// Prompts
ScreenGenerator.prototype.setup = function setup() {

  // remove duplicate slashes (///contact/////us -> /contact/us)
  this.name = this.name.replace(/(\/)\/+/g, '$1');

  // Add '/' to name if it doesn't have it
  this.name = this.name.split('')[0] === '/' ? this.name : '/' + this.name;

  var routeDir = function(route) {
    if (route === '/' || !route) {
      return path.join(directories.source, directories.screens, 'Index', directories.screens);
    }
    var newRouteName = this._.last(this.name.split('/'));
    var newUrl = route.replace('/', '').split('/').reduce(function(item, newItem) {
      if (newItem) {
        return path.join(
          this._.capitalize(this._.slugify(item.toLowerCase())),
          directories.screens, newItem
        );
      }
      return this._.capitalize(this._.slugify(item.toLowerCase()));
    }.bind(this))
    var screenName = newUrl.replace(newRouteName, this._.capitalize(this._.slugify(newRouteName.toLowerCase())));
    return path.join(directories.source, directories.screens, 'Index', directories.screens, screenName);
  }.bind(this);

  this.route = routeDir(this.name);

  this.newRouteName = this._.last(this.name.split('/'));
  this.cleanedURL = this.name.split('/').reduce(function(item, newItem) {
    var url = '/' + this._.slugify(item.toLowerCase()) + '/' + this._.slugify(newItem.toLowerCase());
    // remove duplicate slashes (///contact/////us -> /contact/us)
    return url.replace(/(\/)\/+/g, '$1');
  }.bind(this));

  this.screenFile = path.join(
    this.route,
    'index'
  );

  this.testFile = path.join(
    this.route,
    directories.components,
    this._.slugify(this.newRouteName.toLowerCase()),
    '__tests__',
    this._.slugify(this.newRouteName.toLowerCase())
  );

  this.componentFile = path.join(
    this.route,
    directories.components,
    this._.slugify(this.newRouteName.toLowerCase()),
    this._.slugify(this.newRouteName.toLowerCase())
  );

};

ScreenGenerator.prototype.files = function files() {

  this.template('screen.route.js', this.screenFile + '.js');
  this.template('screen.js', this.componentFile + '.js');

  if (this.testFramework !== 'none') {
    this.template('screen.test.js', this.testFile + '.test.js');
  }

  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('screen.css', this.componentFile + '.sass');
    }
    else {
      this.template('screen.css', this.componentFile + '.scss');
    }
  }
  else if (this.cssOption === 'less') {
    this.template('screen.css', this.componentFile + '.less');
  }
  else if (this.cssOption === 'stylus') {
    this.template('screen.css', this.componentFile + '.styl');
  }
};
