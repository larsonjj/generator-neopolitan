'use strict';

import AppTree from '../trees/app.tree';

let actions = {
  setPage(page) {
    let title = '<%= projectName %> | '.concat(page.title || 'Not Found');
    document.title = title;
    AppTree.set('page', page);
  }
};

export default actions;
