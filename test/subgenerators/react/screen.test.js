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
        'src/screens/Index/screens/' + screenCaptilized + '/components/' + screen + '/__tests__/' + screen + '.test.js',
        'src/screens/Index/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '.js'
      ];
      var fileContentToTest = [
        ['src/screens/Index/screens/' + screenCaptilized +  '/components/' + screen +'/' + screen + '.js', /React\.Component/i]
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
        'src/screens/Index/screens/Contact/screens/' + screenCaptilized + '/components/us/__tests__/us.test.js',
        'src/screens/Index/screens/Contact/screens/' + screenCaptilized + '/components/us/us.js'
      ];
      var fileContentToTest = [
        ['src/screens/Index/screens/Contact/screens/' + screenCaptilized + '/components/us/us.js', /React\.Component/i],
        ['src/screens/Index/screens/Contact/screens/' + screenCaptilized + '/index.js', /path\=\'\/contact\/us\'/i]
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
        'src/screens/Index/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '.js'
      ];
      var filesNotCreated = [
        'src/screens/Index/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '/__tests__/' + screen + '.test.js'
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
    it('Handles defaults with sass (scss syntax)', function(done) {
      // Filename
      var screen = 'contact';
      var screenCaptilized = 'Contact';
      var filesToTest = [
        'src/screens/Index/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '.scss'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none',
        cssOption: 'sass',
        sassSyntax: 'scss'
      });
      this.app.run([], function() {
        createSubGenerator('screen', screen, {path: '../../../../'}, {}, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with sass (sass syntax)', function(done) {
      // Filename
      var screen = 'contact';
      var screenCaptilized = 'Contact';
      var filesToTest = [
        'src/screens/Index/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '.sass'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none',
        cssOption: 'sass',
        sassSyntax: 'sass'
      });
      this.app.run([], function() {
        createSubGenerator('screen', screen, {path: '../../../../'}, {}, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with less', function(done) {
      // Filename
      var screen = 'contact';
      var screenCaptilized = 'Contact';
      var filesToTest = [
        'src/screens/Index/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '.less'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none',
        cssOption: 'less'
      });
      this.app.run([], function() {
        createSubGenerator('screen', screen, {path: '../../../../'}, {}, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with stylus', function(done) {
      // Filename
      var screen = 'contact';
      var screenCaptilized = 'Contact';
      var filesToTest = [
        'src/screens/Index/screens/' + screenCaptilized + '/components/' + screen + '/' + screen + '.styl'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none',
        cssOption: 'stylus'
      });
      this.app.run([], function() {
        createSubGenerator('screen', screen, {path: '../../../../'}, {}, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
