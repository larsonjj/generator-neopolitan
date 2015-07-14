'use strict';

import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import HomeController from './home.controller';

let homeRouter = Marionette.AppRouter.extend({
  appRoutes: {
    '': 'showHome'
  },
  controller: new HomeController()
});

export default homeRouter;
