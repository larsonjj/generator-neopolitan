'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var getDirCount = require('../helpers/get-dir-count');
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
ComponentGenerator.prototype.ask = function ask() {

  var self = this;
  var done = this.async();
  var prompts = [{
    name: 'componentFile',
    message: 'Where would you like to create this component?',
    default: function(answers) {
      return 'src/screens/App/components';
    }
  }];

  this.prompt(prompts, function(answers) {

    this.componentFile = path.join(
      answers.componentFile,
      this._.slugify(this.name.toLowerCase()),
      this._.slugify(this.name.toLowerCase())
    );

    // Get source directory
    this.rootDir = getDirCount(this.componentFile.replace(directories.source + '/', ''));

    this.testFile = path.join(
      answers.componentFile,
      this._.slugify(this.name.toLowerCase()),
      '__tests__',
      this._.slugify(this.name.toLowerCase())
    );

    done();
  }.bind(this));
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
