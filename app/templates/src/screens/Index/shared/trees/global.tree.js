'use strict';

var Baobab = require('baobab');

// Store all application data
let GlobalTree = new Baobab({
  page: {
    title: '<%= projectName %>'
  }
});

export default GlobalTree;
