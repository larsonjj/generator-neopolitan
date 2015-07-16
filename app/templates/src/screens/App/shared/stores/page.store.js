'use strict';

import Reflux from 'reflux';
import pageActions from '../actions/page.actions';

let _page;

// Store page data (title, etc)
let mainStore = new Reflux.createStore({

  init() {
    this.listenTo(pageActions.setPage, this.updatePage);
  },

  updatePage(page) {
    _page = page;
  },

  getPage() {
    return _page;
  }

});

export default mainStore;
