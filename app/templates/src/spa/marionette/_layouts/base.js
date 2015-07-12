'use strict';

import Marionette from 'backbone.marionette';
import baseTemplate from './base.jst';

let BaseLayoutView = Marionette.LayoutView.extend({

  template: baseTemplate,

  regions: {
    content: '#base-layout-wrapper'
  }

});

export default BaseLayoutView;
