/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../../helpers/create-generator').createAppGenerator;
var createSubGenerator = require('../../helpers/create-generator').createSubGenerator;

describe('React component sub-generator', function() {
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
      var component = 'mycomponent';
      var filesToTest = [
        'src/screens/Index/components/' + component + '/__tests__/' + component + '.test.js',
        'src/screens/Index/components/' + component + '/' + component + '.js'
      ];
      var fileContentToTest = [
        ['src/screens/Index/components/' + component + '/' + component + '.js', /React\.Component/i]
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('component', component, {path: '../../../../'}, {
          // mock prompt data
          componentFile: 'src/screens/Index/components'
        }, function() {
          assert.file(filesToTest);
          assert.fileContent(fileContentToTest);
          done();
        });
      });
    });
    it('Handles defaults with "route" option', function(done) {
      // Filename
      var component = 'mycomponent';
      var filesToTest = [
        'src/screens/Index/screens/Contact/components/' + component + '/__tests__/' + component + '.test.js',
        'src/screens/Index/screens/Contact/components/' + component + '/' + component + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('component', component, {
          path: '../../../../',
          route: '/contact'
        }, {}, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with "shared" option', function(done) {
      // Filename
      var component = 'mycomponent';
      var filesToTest = [
        'src/screens/Index/shared/components/' + component + '/__tests__/' + component + '.test.js',
        'src/screens/Index/shared/components/' + component + '/' + component + '.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react'
      });
      this.app.run([], function() {
        createSubGenerator('component', component, {
          path: '../../../../',
          shared: true
        }, {}, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults without testing', function(done) {
      // Filename
      var component = 'mycomponent';
      var filesToTest = [
        'src/screens/Index/components/' + component + '/' + component + '.js'
      ];
      var filesNotCreated = [
        'src/screens/Index/components/' + component + '/__tests__/' + component + '.test.js'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none'
      });
      this.app.run([], function() {
        createSubGenerator('component', component, {path: '../../../../'}, {
          // mock prompt data
          componentFile: 'src/screens/Index/components'
        }, function() {
          assert.file(filesToTest);
          assert.noFile(filesNotCreated);
          done();
        });
      });
    });
    it('Handles defaults with sass (scss syntax)', function(done) {
      // Filename
      var component = 'mycomponent';
      var filesToTest = [
        'src/screens/Index/components/' + component + '/' + component + '.scss'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none',
        'cssOption': 'sass',
        'sassSyntax': 'scss'
      });
      this.app.run([], function() {
        createSubGenerator('component', component, {path: '../../../../'}, {
          // mock prompt data
          componentFile: 'src/screens/Index/components'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with sass (sass syntax)', function(done) {
      // Filename
      var component = 'mycomponent';
      var filesToTest = [
        'src/screens/Index/components/' + component + '/' + component + '.sass'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none',
        'cssOption': 'sass',
        'sassSyntax': 'sass'
      });
      this.app.run([], function() {
        createSubGenerator('component', component, {path: '../../../../'}, {
          // mock prompt data
          componentFile: 'src/screens/Index/components'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with less', function(done) {
      // Filename
      var component = 'mycomponent';
      var filesToTest = [
        'src/screens/Index/components/' + component + '/' + component + '.less'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none',
        'cssOption': 'less'
      });
      this.app.run([], function() {
        createSubGenerator('component', component, {path: '../../../../'}, {
          // mock prompt data
          componentFile: 'src/screens/Index/components'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
    it('Handles defaults with stylus', function(done) {
      // Filename
      var component = 'mycomponent';
      var filesToTest = [
        'src/screens/Index/components/' + component + '/' + component + '.styl'
      ];

      helpers.mockPrompt(this.app, {
        jsFramework: 'react',
        testFramework: 'none',
        'cssOption': 'stylus'
      });
      this.app.run([], function() {
        createSubGenerator('component', component, {path: '../../../../'}, {
          // mock prompt data
          componentFile: 'src/screens/Index/components'
        }, function() {
          assert.file(filesToTest);
          done();
        });
      });
    });
  });
});
