import Wreqr from '../wreqr';

// Mounts a specified layout view
let mountLayout = (LayoutView) => {
  let layoutView = new LayoutView();

  // Trigger mounting base layout within DOM
  Wreqr.trigger('app:show', layoutView);

  return layoutView;
};

export default mountLayout;
