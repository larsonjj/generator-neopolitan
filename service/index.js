'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
// var getDirCount = require('../helpers/get-dir-count');
var path = require('path');
var pjson = require(path.join(process.cwd(), './package.json'));
var config = pjson.config;
var directories = config.directories;

var ServiceGenerator = module.exports = function ServiceGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.projectName = fileJSON.projectName;
  this.jsFramework = fileJSON.jsFramework;
  this.testFramework = fileJSON.testFramework;

};

util.inherits(ServiceGenerator, yeoman.generators.NamedBase);

// Prompts
ServiceGenerator.prototype.ask = function ask() {
  if (this.jsFramework !== 'angular') {
    this.log('This subgenerator is only used for Angular Applications. It seems as though you are not using Angular');
    this.log('Operation aborted');
    this.abort = true;
    return;
  }

  var done = this.async();
  var prompts = [{
    name: 'serviceFile',
    message: 'Where would you like to create this service?',
    default: config ? directories.source + '/' + directories.scripts : 'src/_scripts'
  }];

  this.prompt(prompts, function(answers) {

    this.serviceFile = path.join(
        answers.serviceFile,
        this._.slugify(this.name.toLowerCase()),
        this._.slugify(this.name.toLowerCase())
      );
    this.testFile = path.join(
        answers.serviceFile,
        this._.slugify(this.name.toLowerCase()),
        '__tests__',
        this._.slugify(this.name.toLowerCase())
      );
    done();
  }.bind(this));
};

ServiceGenerator.prototype.files = function files() {
  if (this.abort) {
    return;
  }

  this.template('service.js', this.serviceFile + '.service.js');

  if (this.testFramework !== 'none') {
    this.template('service.spec.js', this.testFile + '.service.spec.js');
  }

};
