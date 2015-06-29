/**
 * Handle prompt choices and setup template values
 * For file creation
 */

'use strict';

var _ = require('lodash');

var answersConfig = function answersConfig() {

  // If user chooses to use exsiting yo-rc file, then skip prompts
  if (this.existingConfig) {
    this.answers = this.config.get('config');
  }
  else {
    this.answers = _.merge(
      this.projectPrompts,
      this.clientPrompts,
      this.testingPrompts
    );
  }

  // Assign each answer property to `this` context to give the generator access to it

  // Project Info
  this.projectName = this.answers.projectName;
  this.versionControl = this.answers.versionControl;

  // Client
  this.jsFramework = this.answers.jsFramework;
  this.jsOption = this.answers.jsOption;
  this.cssOption = this.answers.cssOption;
  this.sassSyntax = this.answers.sassSyntax;

  // Default to mocha for testing
  this.answers.testFramework = this.answers.testFramework || 'mocha';

  // Testing
  this.testFramework = this.answers.testFramework;
  this.useTesting = this.answers.useTesting;
  this.useE2e = this.answers.useE2e;

  // Default jsOption to Browserify
  this.jsOption = this.answers.jsOption || 'browserify';

};

module.exports = answersConfig;
