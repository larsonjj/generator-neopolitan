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

    // Index route
    this.template('src/screens/Index/index.js', 'src/screens/Index/index.js');

    // Index view
    this.template(
      'src/screens/Index/components/layout/layout.js',
      'src/screens/Index/components/layout/layout.js'
    );
    if (this.testFramework !== 'none') {
      this.template(
        'src/screens/Index/components/layout/__tests__/layout.test.js',
        'src/screens/Index/components/layout/__tests__/layout.test.js'
      );
    }

    // Home view
    this.template(
      'src/screens/Index/components/index/index.js',
      'src/screens/Index/components/index/index.js'
    );
    if (this.testFramework !== 'none') {
      this.template(
        'src/screens/Index/components/index/__tests__/index.test.js',
        'src/screens/Index/components/index/__tests__/index.test.js'
      );
      this.template('test/karma/karma.conf.js', 'karma.conf.js');
    }

    // Styles
    if (this.cssOption === 'less') {
      this.template('src/index.less', 'src/index.less');
      this.template(
        'src/screens/Index/components/index/index.less',
        'src/screens/Index/components/index/index.less'
      );
      this.template(
        'src/screens/Index/components/layout/layout.less',
        'src/screens/Index/components/layout/layout.less'
      );
    }
    if (this.cssOption === 'sass') {
      if (this.sassSyntax === 'sass') {
        this.template('src/index.sass', 'src/index.sass');
        this.template(
          'src/screens/Index/components/index/index.sass',
          'src/screens/Index/components/index/index.sass'
        );
        this.template(
          'src/screens/Index/components/layout/layout.sass',
          'src/screens/Index/components/layout/layout.sass'
        );
      }
      else {
        this.template('src/index.scss', 'src/index.scss');
        this.template(
          'src/screens/Index/components/index/index.scss',
          'src/screens/Index/components/index/index.scss'
        );
        this.template(
          'src/screens/Index/components/layout/layout.scss',
          'src/screens/Index/components/layout/layout.scss'
        );
      }
    }
    if (this.cssOption === 'stylus') {
      this.template('src/index.styl', 'src/index.styl');
      this.template(
        'src/screens/Index/components/index/index.styl',
        'src/screens/Index/components/index/index.styl'
      );
      this.template(
        'src/screens/Index/components/layout/layout.styl',
        'src/screens/Index/components/layout/layout.styl'
      );
    }

    // Index Shared Files
    this.directory('src/screens/Index/shared', 'src/screens/Index/shared');

  }
};

module.exports = reactFiles;
