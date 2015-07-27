'use strict';

import AppStore from '../stores/app.store';

let actions = {
  setPage(page) {
    let title = '<%= projectName %> | '.concat(page.title || 'Not Found');
    document.title = title;
    AppStore.set('page', page);
  }
};

export default actions;
