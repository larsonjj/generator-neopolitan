/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('React module sub-generator', function() {
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
      var module = 'mymodule';
      var filesToTest = [
        'src/_modules/' + module + '/__tests__/' + module + '.spec.js',
        'src/_modules/' + module + '/' + module + '.jsx'
      ];
      var fileContentToTest = [
        ['src/_modules/' + module + '/' + module + '.jsx', /React\.createClass/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('module', module, {path: '../../../../'}, {
          // mock prompt data
          moduleFile: 'src/_modules'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults with JSX', function(done) {
      // Filename
      var module = 'mymodule';
      var filesToTest = [
        'src/_modules/' + module + '/__tests__/' + module + '.spec.js',
        'src/_modules/' + module + '/' + module + '.jsx'
      ];
      var fileContentToTest = [
        ['src/_modules/' + module + '/__tests__/' + module + '.spec.js', /React\.createFactory/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('module', module, {path: '../../../../'}, {
          // mock prompt data
          moduleFile: 'src/_modules'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults without testing', function(done) {
      // Filename
      var module = 'mymodule';
      var filesToTest = [
        'src/_modules/' + module + '/' + module + '.jsx'
      ];
      var filesNotCreated = [
        'src/_modules/' + module + '/__tests__/' + module + '.spec.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        useTesting: false
      });
      this.app.run([], function() {
        createSubGenerator('module', module, {path: '../../../../'}, {
          // mock prompt data
          moduleFile: 'src/_modules'
        }, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          done();
        });
      });
    });
  });
});
