'use strict';

import Reflux from 'reflux';
import mainActions from '../actions/main.actions';

let _page;

let mainStore = new Reflux.createStore({

  init() {
    this.listenTo(mainActions.setPage, this.updatePage);
  },

  updatePage(page) {
    _page = page;
  },

  getPage() {
    return _page;
  }

});

export default mainStore;
