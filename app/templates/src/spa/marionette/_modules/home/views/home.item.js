'use strict';

import Marionette from'backbone.marionette';
import homeTemplate from'./home.item.jst';

let HomeView = Marionette.ItemView.extend({

  // Template compiled by grunt-jst and attached to 'JST' namespace
  template: homeTemplate,

  events: {}

});

export default HomeView;
