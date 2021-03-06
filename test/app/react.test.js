/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;
var createAppGenerator = require('../helpers/create-generator').createAppGenerator;

describe('Neopolitan generator using React', function() {
  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        return done(err);
      }

      this.app = createAppGenerator();

      done();
    }.bind(this));
  });

  describe('On the Client', function() {
    describe('With Browserify', function() {
      describe('With Defaults', function() {
        it('Creates expected files', function(done) {
          var expected = [
            'src',
            'src/index.js',
            'src/screens/Index/index.js',
            'src/screens/Index/shared/trees/global.tree.js',
            'src/screens/Index/shared/actions/global.actions.js'
          ];

          var fileContentToTest = [
            ['src/screens/Index/index.js', /export/i],
            ['src/index.html', /app\-wrapper/i]
          ];

          helpers.mockPrompt(this.app, {
            singlePageApplication: true,
            jsFramework: 'react',
            jsTemplate: false,
            jsOption: 'browserify',
          });

          this.app.run([], function() {
            assert.file(expected);
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      describe('Using Jasmine', function() {
        it('Creates expected files with expected content', function(done) {
          var expected = [
            // add files and folders you expect to exist here.
            'src/screens/Index/components/index/index.js'
          ];
          var fileContentToTest = [
            ['src/screens/Index/components/index/index.js', /<div>/i],
            ['src/screens/Index/index.js', /Route/i]
          ];

          helpers.mockPrompt(this.app, {
            singlePageApplication: true,
            jsFramework: 'react',
            jsTemplate: false,
            jsOption: 'browserify',
            testFramework: 'jasmine'
          });

          this.app.run([], function() {
            assert.file(expected);
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
      describe('Using Mocha', function() {
        it('Creates expected files with expected content', function(done) {
          var expected = [
            // add files and folders you expect to exist here.
            'src/screens/Index/components/index/index.js'
          ];
          var fileContentToTest = [
            ['src/screens/Index/components/index/index.js', /<div>/i],
            ['src/screens/Index/index.js', /Route/i]
          ];

          helpers.mockPrompt(this.app, {
            singlePageApplication: true,
            jsFramework: 'react',
            jsTemplate: false,
            jsOption: 'browserify',
            testFramework: 'mocha'
          });

          this.app.run([], function() {
            assert.file(expected);
            assert.fileContent(fileContentToTest);
            done();
          });
        });
      });
    });
  });
});
