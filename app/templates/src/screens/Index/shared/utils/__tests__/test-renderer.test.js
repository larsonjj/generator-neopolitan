<% if (testFramework === 'mocha') { %>/*eslint no-unused-expressions:0 */<% } %>
'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import testRenderer from '../test-renderer';

// Create Test React Component
class TestComponent extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

let component = testRenderer(<TestComponent />);

describe('Test Renderer', function() {

  it('provides the "Test Renderer" Shallow Rendered Component with type of "div"', () => {
    // Expect it to exist
    expect(component.type)<% if (testFramework === 'jasmine') { %>.toBe('div')<% } else if (testFramework === 'mocha') { %>.to.equal('div')<% } %>;
  });

});
