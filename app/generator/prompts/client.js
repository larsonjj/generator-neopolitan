/**
 * Create prompts for client info
 */

'use strict';

var clientPrompts = function clientPrompts() {
  if (this.existingConfig) {
    return;
  }

  var cb = this.async();

  this.log('\n---- ' + 'Client'.red.underline + ' ----\n');

  this.prompt([{
    type: 'list',
    name: 'jsFramework',
    message: 'Which ' + 'JavaScript framework/library'.blue + ' would you like to use?',
    choices: ['React + Reflux + React Router', 'Backbone + Marionette', 'Angular'],
    filter: function(val) {
      var filterMap = {
        'React + Reflux + React Router': 'react',
        'Backbone + Marionette': 'marionette',
        'Angular': 'angular'
      };

      return filterMap[val];
    }
  },
  {
    type: 'list',
    name: 'cssOption',
    message: 'What would you like to use to ' + 'write styles'.blue + '?',
    choices: ['Sass', 'Less', 'Stylus'],
    filter: function(val) {
      var filterMap = {
        'Sass': 'sass',
        'Less': 'less',
        'Stylus': 'stylus'
      };

      return filterMap[val];
    }
  }, {
    when: function(answers) {
      return answers.cssOption === 'sass';
    },
    type: 'list',
    name: 'sassSyntax',
    message: 'What ' + 'Sass syntax'.blue + ' would you like to use ?',
    choices: ['Scss', 'Sass'],
    filter: function(val) {
      var filterMap = {
        'Scss': 'scss',
        'Sass': 'sass'
      };

      return filterMap[val];
    }
  }], function(answers) {
    this.clientPrompts = answers;

    cb();
  }.bind(this));
};

module.exports = clientPrompts;
