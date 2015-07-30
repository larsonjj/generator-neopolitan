'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var path = require('path');
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;

var ComponentGenerator = module.exports = function ComponentGenerator() {
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

util.inherits(ComponentGenerator, yeoman.generators.NamedBase);

// Prompts
ComponentGenerator.prototype.setup = function setup() {

  this.shared = false;
  if (this.options.shared) {
    this.shared = this.options.shared;
  }

  var routeDir = function(route) {
    if (route === '/' || !route) {
      return path.join(
        directories.source, directories.screens, '/Index/',
        (this.shared ? path.join(directories.shared, directories.components) : directories.components));
    }
    // remove duplicate slashes (///contact/////us -> /contact/us)
    var _route = route.replace(/(\/)\/+/g, "$1");
    var newRouteName = this._.last(route.split('/'));
    var newUrl = route.replace('/', '').split('/').reduce(function(item, newItem) {
      if (newItem) {
        return path.join(
          this._.capitalize(this._.slugify(item.toLowerCase())),
          directories.screens, this._.capitalize(this._.slugify(newItem.toLowerCase()))
        );
      }
      return this._.capitalize(this._.slugify(item.toLowerCase()));
    }.bind(this))
    var screenName = newUrl.replace(newRouteName, this._.capitalize(this._.slugify(newRouteName.toLowerCase())));
    return path.join(
      directories.source, directories.screens, 'Index', directories.screens, screenName,
      (this.shared ? path.join(directories.shared, directories.components) : directories.components)
    );
  }.bind(this);

  this.route = routeDir('/');
  if (this.options.route) {
    this.route = routeDir(this.options.route);
  }

  this.componentFile = path.join(
    this.route,
    this._.slugify(this.name.toLowerCase()),
    this._.slugify(this.name.toLowerCase())
  );

  this.testFile = path.join(
    this.route,
    this._.slugify(this.name.toLowerCase()),
    '__tests__',
    this._.slugify(this.name.toLowerCase())
  );

};

ComponentGenerator.prototype.files = function files() {

  this.template('component.js', this.componentFile + '.js');

  if (this.testFramework !== 'none') {
    this.template('component.test.js', this.testFile + '.test.js');
  }

  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('component.css', this.componentFile + '.sass');
    }
    else {
      this.template('component.css', this.componentFile + '.scss');
    }
  }
  else if (this.cssOption === 'less') {
    this.template('component.css', this.componentFile + '.less');
  }
  else if (this.cssOption === 'stylus') {
    this.template('component.css', this.componentFile + '.styl');
  }
};
