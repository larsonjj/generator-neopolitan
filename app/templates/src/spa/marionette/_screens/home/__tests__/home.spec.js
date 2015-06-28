<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

var HomeRouter = require('../home');

describe('Home View', function() {

  beforeEach(function() {
    this.homeRouter = new HomeRouter();
  });

  it('provides the "Home View" instance', function() {
    // Expect it to exist
    expect(this.homeRouter)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
