/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Neopolitan generator testing', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });
  describe('With unit tests', function() {
    it('Creates expected files', function(done) {
      var expected = [
        'karma.conf.js',
        'phantomjs-shims.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'none',
        jsOption: 'none',
        testFramework: 'jasmine'
      });

      this.app.run([], function() {
        assert.file(expected);
        done();
      });
    });
  });
  describe('Without unit tests', function() {
    it('Does not create certain files', function(done) {
      var notExpected = [
        'karma.conf.js',
        'phantomjs-shims.js'
      ];

      helpers.mockPrompt(this.app, {
        testFramework: 'none'
      });

      this.app.run([], function() {
        assert.noFile(notExpected);
        done();
      });
    });
  });
});
