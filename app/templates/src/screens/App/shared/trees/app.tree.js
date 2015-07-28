'use strict';

var Baobab = require('baobab');

// Store all application data
let AppTree = new Baobab({
  page: {
    title: '<%= projectName %>'
  }
});

export default AppTree;
