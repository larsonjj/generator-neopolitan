/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('React screen sub-generator', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator([], {path: '../../../../app'});

      done();
    }.bind(this));
  });

  describe('Create react files when using React', function() {
    it('Handles defaults', function(done) {
      // Filename
      var screen = 'contact';
      var screenCaptilized = 'Contact';
      var filesToTest = [
        'src/screens/App/screens/' + screenCaptilized + '/components/' + screen + '/__tests__/' + screen + '.test.js',
        'src/screens/App/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '.js'
      ];
      var fileContentToTest = [
        ['src/screens/App/screens/' + screenCaptilized +  '/components/' + screen +'/' + screen + '.js', /React\.Component/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('screen', screen, {path: '../../../../'}, {}, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults with long name', function(done) {
      // Filename
      var screen = '/contact/us';
      var screenCaptilized = 'Us';
      var filesToTest = [
        'src/screens/App/screens/Contact/screens/' + screenCaptilized + '/components/us/__tests__/us.test.js',
        'src/screens/App/screens/Contact/screens/' + screenCaptilized + '/components/us/us.js'
      ];
      var fileContentToTest = [
        ['src/screens/App/screens/Contact/screens/' + screenCaptilized + '/components/us/us.js', /React\.Component/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        cssOption: 'sass',
        sassSyntax: 'scss'
      });
      this.app.run([], function() {
        createSubGenerator('screen', screen, {path: '../../../../'}, {}, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults without testing', function(done) {
      // Filename
      var screen = 'contact';
      var screenCaptilized = 'Contact';
      var filesToTest = [
        'src/screens/App/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '.js'
      ];
      var filesNotCreated = [
        'src/screens/App/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '/__tests__/' + screen + '.test.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none'
      });
      this.app.run([], function() {
        createSubGenerator('screen', screen, {path: '../../../../'}, {}, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          done();
        });
      });
    });
  });
});
