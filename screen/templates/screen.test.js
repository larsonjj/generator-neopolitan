<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import <%= _.classify(newRouteName.toLowerCase()) %> from '../<%= _.slugify(newRouteName.toLowerCase()) %>';
import testRenderer from 'utils/test-renderer';

describe('<%= _.classify(newRouteName.toLowerCase()) %> View', function() {

  let component = testRenderer(<<%= _.classify(newRouteName.toLowerCase()) %> />);

  it('provides the "<%= _.classify(newRouteName.toLowerCase()) %> View" instance', () => {
    // Expect it to exist
    expect(component)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
