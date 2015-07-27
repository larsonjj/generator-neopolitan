import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

var createComponent = (Component) => {
  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(Component);
  return shallowRenderer.getRenderOutput();
};

export default createComponent;
