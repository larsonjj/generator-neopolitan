'use strict';
<% if (testFramework === 'mocha') { %>
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
<% } %>
describe('Home Page', function() {
  var page;

  beforeEach(function() {<% if (jsFramework !== 'angular') { %>
    // Inform protractor that it will run non-angular tests
    isAngularSite(false);<% } %>
    browser.get('/');
    page = require('./home.po');
  });

  it('should include welcome message', function() {
<% if (testFramework === 'mocha') { %>
    expect(page.h1El.getText()).to.eventually.equal('Welcome to Neopolitan!');
    expect(page.imgEl.getAttribute('src')).to.eventually.match(/\/images\/neopolitan\-logo\.png/);
<% } else { %>
  expect(page.h1El.getText()).toBe('Welcome to Neopolitan!');
    expect(page.imgEl.getAttribute('src')).toMatch(/\/images\/neopolitan\-logo\.png/);
<% } %>
  });

});

