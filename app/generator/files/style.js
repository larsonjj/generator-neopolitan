/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  if (this.cssOption === 'less') {
    this.template('src/default/_styles/main.less', 'src/_styles/main.less');
    this.template('src/default/_styles/home/home.less', 'src/_modules/home/home.less');
  }
  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('src/default/_styles/main.sass', 'src/_styles/main.sass');
      this.template('src/default/_styles/home/home.sass', 'src/_modules/home/home.sass');
    }
    else {
      this.template('src/default/_styles/main.scss', 'src/_styles/main.scss');
      this.template('src/default/_styles/home/home.scss', 'src/_modules/home/home.scss');
    }
  }
  if (this.cssOption === 'stylus') {
    this.template('src/default/_styles/main.styl', 'src/_styles/main.styl');
    this.template('src/default/_styles/home/home.styl', 'src/_modules/home/home.styl');
  }
};

module.exports = styleFiles;
