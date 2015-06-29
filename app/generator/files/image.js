/**
 * Generate files specific to needed images
 */

'use strict';

var imageFiles = function imageFiles() {
  this.copy('src/default/_images/neopolitan-logo.png', 'src/_images/neopolitan-logo.png');
};

module.exports = imageFiles;
