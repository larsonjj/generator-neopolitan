/**
 * Generate files specific to needed images
 */

'use strict';

var imageFiles = function imageFiles() {
  this.copy('src/default/assets/images/neopolitan-logo.png', 'src/assets/images/neopolitan-logo.png');
};

module.exports = imageFiles;
