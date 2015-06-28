'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
// var getDirCount = require('../helpers/get-dir-count');
var path = require('path');
var yeogurtConf;

try {
  yeogurtConf = require(path.join(process.cwd(), './yeogurt.conf'));
  var directories = yeogurtConf.directories;
}
catch(e) {
  return; // Do Nothing
}

var DirectiveGenerator = module.exports = function DirectiveGenerator() {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  var fileJSON = this.config.get('config');

  // options
  this.projectName = fileJSON.projectName;
  this.jsFramework = fileJSON.jsFramework;
  this.testFramework = fileJSON.testFramework;
  this.useTesting = fileJSON.useTesting;

};

util.inherits(DirectiveGenerator, yeoman.generators.NamedBase);

// Prompts
DirectiveGenerator.prototype.ask = function ask() {
  if (this.jsFramework !== 'angular') {
    this.log('This subgenerator is only used for Angular Applications. It seems as though you are not using Angular');
    this.log('Operation aborted');
    this.abort = true;
    return;
  }

  var done = this.async();
  var prompts = [{
    name: 'directiveFile',
    message: 'Where would you like to create this directive?',
    default: yeogurtConf ? directories.source + '/' + directories.scripts : 'src/_scripts'
  }, {
    type: 'confirm',
    name: 'directiveHTML',
    message: 'Does this directive need an HTML template?',
    default: true
  }];

  this.prompt(prompts, function(answers) {

    this.directiveFile = path.join(
        answers.directiveFile,
        this._.slugify(this.name.toLowerCase()),
        this._.slugify(this.name.toLowerCase())
      );
    this.testFile = path.join(
        answers.directiveFile,
        this._.slugify(this.name.toLowerCase()),
        '__tests__',
        this._.slugify(this.name.toLowerCase())
      );
    this.htmlUrl = path.join(
        answers.directiveFile.replace('src', ''),
        this._.slugify(this.name.toLowerCase()),
        this._.slugify(this.name.toLowerCase())
      ) + '.html';
    this.makeHTML = answers.directiveHTML;

    done();
  }.bind(this));
};

DirectiveGenerator.prototype.files = function files() {
  if (this.abort) {
    return;
  }

  this.template('directive.js', this.directiveFile + '.directive.js');

  if (this.useTesting) {
    this.template('directive.spec.js', this.testFile + '.directive.spec.js');
  }

  if (this.makeHTML) {
    this.template('directive.html', this.directiveFile + '.html');
  }

};
