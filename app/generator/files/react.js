/**
 * Generate files specific to the react folder
 */

'use strict';

var reactFiles = function reactFiles() {
  if (this.jsFramework === 'react') {

    // Root files
    this.template('src/favicon.ico', 'src/favicon.ico');
    this.template('src/robots.txt', 'src/robots.txt');
    this.template('src/index.html', 'src/index.html');
    this.template('src/index.js', 'src/index.js');

    // App route
    this.template('src/screens/App/index.js', 'src/screens/App/index.js');

    // App view
    this.template(
      'src/screens/App/components/app-view/app.view.js',
      'src/screens/App/components/app-view/app.view.js'
    );
    if (this.testFramework !== 'none') {
      this.template(
        'src/screens/App/components/app-view/__tests__/app.view.test.js',
        'src/screens/App/components/app-view/__tests__/app-view.test.js'
      );
    }

    // Home view
    this.template(
      'src/screens/App/components/home-view/home.view.js',
      'src/screens/App/components/home-view/home.view.js'
    );
    if (this.testFramework !== 'none') {
      this.template(
        'src/screens/App/components/home-view/__tests__/home.view.test.js',
        'src/screens/App/components/home-view/__tests__/home.view.test.js'
      );
      this.template('test/karma/karma.conf.js', 'karma.conf.js');
    }

    // Styles
    if (this.cssOption === 'less') {
      this.template('src/index.less', 'src/index.less');
      this.template(
        'src/screens/App/components/home-view/home.view.less',
        'src/screens/App/components/home-view/home.less'
      );
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.template('src/index.sass', 'src/index.sass');
        this.template(
          'src/screens/App/components/home-view/home.view.sass',
          'src/screens/App/components/home-view/home.sass'
        );
      }
      else {
        this.template('src/index.scss', 'src/index.scss');
        this.template(
          'src/screens/App/components/home-view/home.view.scss',
          'src/screens/App/components/home-view/home.scss'
        );
      }
    }
    if (this.cssOption === 'stylus') {
      this.template('src/index.styl', 'src/index.styl');
      this.template(
        'src/screens/App/components/home-view/home.view.styl',
        'src/screens/App/components/home-view/home.styl'
      );
    }

    // App Shared Files
    this.directory('src/screens/App/shared', 'src/screens/App/shared');
  }
};

module.exports = reactFiles;
