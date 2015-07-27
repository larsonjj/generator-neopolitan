'use strict';

var Baobab = require('baobab');

// Store all application data
let AppStore = new Baobab({
  page: {
    title: '<%= projectName %>'
  }
});

export default AppStore;
