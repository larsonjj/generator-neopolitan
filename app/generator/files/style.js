/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  if (this.cssOption === 'less') {
    this.template('src/default/styles/index.less', 'src/index.less');
    this.template('src/default/styles/home/home.less', 'src/screens/Home/components/home-view/home.less');
  }
  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('src/default/styles/index.sass', 'src/index.sass');
      this.template('src/default/styles/home/home.sass', 'src/screens/Home/components/home-view/home.sass');
    }
    else {
      this.template('src/default/styles/index.scss', 'src/index.scss');
      this.template('src/default/styles/home/home.scss', 'src/screens/Home/components/home-view/home.scss');
    }
  }
  if (this.cssOption === 'stylus') {
    this.template('src/default/styles/index.styl', 'src/index.styl');
    this.template('src/default/styles/home/home.styl', 'src/screens/Home/components/home-view/home.styl');
  }
};

module.exports = styleFiles;
