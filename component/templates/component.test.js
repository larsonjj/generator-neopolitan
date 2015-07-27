<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import <%= _.classify(name.toLowerCase()) %> from '../<%= _.slugify(name.toLowerCase()) %>';
import testRenderer from '../../../shared/utils/test-renderer';

describe('<%= _.classify(name.toLowerCase()) %> View', function() {

  let component = testRenderer(<<%= _.classify(name.toLowerCase()) %> />);

  it('provides the "<%= _.classify(name.toLowerCase()) %> View" instance', () => {
    // Expect it to exist
    expect(component)<% if (testFramework === 'jasmine') { %>.toBeDefined()<% } else if (testFramework === 'mocha') { %>.to.be.ok<% } %>;
  });

});
