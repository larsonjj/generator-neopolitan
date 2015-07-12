'use strict';

import Reflux from 'reflux';

let actions = Reflux.createActions([
  'setPage'  // Action to update page title
]);

actions.setPage.listen((page) => {
  document.title = page.title || 'Home';
});

export default actions;
