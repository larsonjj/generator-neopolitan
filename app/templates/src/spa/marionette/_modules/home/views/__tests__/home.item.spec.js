<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

import HomeView from '../home.view';

describe('Home View', () => {

  beforeEach(() => {
    this.homeView = new HomeView();
  });

  it('provides the "Home View" instance', () => {
    // Expect it to exist
    expect(this.homeView)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
