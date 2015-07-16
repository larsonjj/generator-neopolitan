/**
 * Generate files specific to the styles folder
 */

'use strict';

var styleFiles = function styleFiles() {
  if (this.cssOption === 'less') {
    this.template('src/default/styles/index.less', 'src/index.less');
    if (this.jsFramework === 'react') {
      this.template('src/default/styles/home/home.less', 'src/screens/App/components/home-view/home.less');
    }
    else if (this.jsFramework === 'angular') {
      this.template('src/default/styles/home/home.less', 'src/screens/home/home.less');
    }
  }
  if (this.cssOption === 'sass') {
    if (this.sassSyntax === 'sass') {
      this.template('src/default/styles/index.sass', 'src/index.sass');
      if (this.jsFramework === 'react') {
        this.template('src/default/styles/home/home.sass', 'src/screens/App/components/home-view/home.sass');
      }
      else if (this.jsFramework === 'angular') {
        this.template('src/default/styles/home/home.sass', 'src/screens/home/home.sass');
      }
    }
    else {
      this.template('src/default/styles/index.scss', 'src/index.scss');
      if (this.jsFramework === 'react') {
        this.template('src/default/styles/home/home.scss', 'src/screens/App/components/home-view/home.scss');
      }
      else if (this.jsFramework === 'angular') {
        this.template('src/default/styles/home/home.scss', 'src/screens/home/home.scss');
      }
    }
  }
  if (this.cssOption === 'stylus') {
    this.template('src/default/styles/index.styl', 'src/index.styl');
    if (this.jsFramework === 'react') {
      this.template('src/default/styles/home/home.styl', 'src/screens/App/components/home-view/home.styl');
    }
    else if (this.jsFramework === 'angular') {
      this.template('src/default/styles/home/home.styl', 'src/screens/home/home.styl');
    }
  }
};

module.exports = styleFiles;
