'use strict';

import GlobalTree from '../trees/global.tree';

let globalActions = {
  setPage(page) {
    let title = '<%= projectName %> | '.concat(page.title || 'Not Found');
    document.title = title;
    GlobalTree.set('page', page);
  }
};

export default globalActions;
