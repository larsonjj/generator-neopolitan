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

  // Client
  this.jsFramework = 'react';
  this.jsOption = this.answers.jsOption;
  this.cssOption = this.answers.cssOption;
  this.sassSyntax = this.answers.sassSyntax;

  // Default to mocha for testing
  this.answers.testFramework = this.answers.testFramework || 'mocha';

  // Testing
  this.testFramework = this.answers.testFramework;

  // Default jsOption to Browserify
  this.jsOption = 'browserify';

};

module.exports = answersConfig;
