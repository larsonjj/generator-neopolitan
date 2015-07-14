import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import HomeView from './views/home.item';
import BaseLayoutView from '../../_layouts/base';
import mountLayout from '../../_scripts/utils/mount-layout';
import Wreqr from '../../_scripts/wreqr';

let HomeController = Marionette.Controller.extend({
  initialize() {
    return this.setHandlers();
  },
  showHome() {
    let homeView = new HomeView();

    // Mounts specified layout
    let layout = mountLayout(BaseLayoutView);

    // Render home view within layout 'content' region
    layout.content.show(homeView);
  },
  setHandlers() {
    let self = this;
    return Wreqr.on('home:show', () => {
      Backbone.history.navigate('/');
      self.showHome();
    });
  }
});

module.exports = HomeController;
