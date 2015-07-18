<p align="center">
  <img src="https://raw.githubusercontent.com/larsonjj/generator-neopolitan/master/docs/images/logo.png" />
</p>

# Neopolitan Generator [![Build Status](https://secure.travis-ci.org/larsonjj/generator-neopolitan.png?branch=master)](https://travis-ci.org/larsonjj/generator-neopolitan) [![NPM version](https://badge.fury.io/js/generator-neopolitan.png)](http://badge.fury.io/js/generator-neopolitan) [![Coverage Status](https://coveralls.io/repos/larsonjj/generator-neopolitan/badge.png)](https://coveralls.io/r/larsonjj/generator-neopolitan)

A generator for creating React applications. Helps you harness the power of your favorite tools: React, Reflux, React-Router, ES6/2015, Gulp, and much more!

# Table of Contents

- [What can I create with Neopolitan?](#what-can-i-create-with-neopolitan)
- [Getting Started](#getting-started)
- [Features](#features)
- [Gulp Workflow](#gulp-workflow)
- [Sub-Generators](#sub-generators)
- [Automated Documentation](#automated-documentation)
- [Common Issues](#common-issues)
- [Testing Generator](#testing-generator)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Release History](#release-history)
- [License](#license)

## What can I create with Neopolitan?
### Create Single Page Applications using one of the following:
-  [React](http://facebook.github.io/react/) + [Reflux](https://github.com/spoike/refluxjs) + [React-Router](https://github.com/rackt/react-router).

Check out the [features](#features) section to see everything this generator has to offer.

## Getting Started
This generator utilizes [Yeoman](http://yeoman.io/) and [Gulp](http://gulpjs.com/) to Scaffold out projects, automate tasks, and manage front-end dependencies respectively. If this is your first time here, it is recommended you [read about these tools](http://yeoman.io/learning/index.html) before proceeding.

### Installation
There are a few dependencies that this project relies on:

#### Node.js
Check to see if you already have Node installed. Do this by bringing up a terminal/command prompt and type `node -v`. If the response shows a version at or above `v0.12.x`, you are all set and can proceed to installing Yeoman, Gulp, and Bower. If you see an error and/or your version is too low, navigate to the [Node.js](http://nodejs.org/) website and install Node from there.

#### Yeoman & Gulp
Once you have Node installed, make sure you have these tools by opening up a terminal/command prompt and entering following commands:

| Command  | Response
|---------- |:---------:
| `yo -v`  | at or above `v1.3.0`
| `gulp -v` | `gulp` at or above `v3.9.0`

If you get any errors and/or you're version(s) are too low, you should run `npm install -g yo gulp`. This will install all the needed tools and update them to their latest versions.

#### Neopolitan
Now that you have all the needed dependencies, you can install this generator with the following command: `npm install -g generator-neopolitan`

That completes installation! So at this point you should have all the needed tools to start working Neopolitan.

### Usage
When starting a new project, you will want to: open up a terminal/command prompt, make a new directory, and navigate into it.

```
mkdir my-new-project && cd $_
```

then, run the Neopolitan generator.

```
yo neopolitan
```

Optionally, you can skip the automated installation of npm packages by passing in `--skip-install`. The main reason to use this is if you have spotty/no internet connection, but would still like to generate your project.

```
yo neopolitan --skip-install
```

Follow all the prompts and choose what suits you most for the project you would like to create. When you finish with all of the prompts, your project scaffold will be created and all dependencies will be installed.

***NOTE: If you used the `--skip-install` option, no dependencies will have been installed. You will need to run `npm install` in your project's root directory in order to get started running automated tasks***

Now you can run:

- `gulp serve` for previewing your site/app on a development server.
- `gulp serve --production` for previewing a production version of your site/app.
- `gulp` for testing and building a development version of your site.
- `gulp --production` same as `gulp` but builds a production version of your site.
- `gulp test` for linting your scripts running unit tests.

You can learn more about what tasks are available in the [gulp tasks](#gulp-workflow) section.

Congratulations! You should now have successfully created a Neopolitan project and are ready to start building out your site/app.


## Features

### Included in every project
- Built in preview server with [BrowserSync](http://www.browsersync.io/)
- [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- Automated build process that includes: compilation of preprocessors (Jade, Sass, etc), minification of CSS and HTML, uglification of Javascript, optimization of images, and processing of [usemin blocks](Usemin blocks)
- [Sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for JavaScript and Stylesheets
- JavaScript Linting with [ESLint](http://eslint.org//)
- ES6/2015 support out of the box using [Babel](https://babeljs.io/)
- [React](http://facebook.github.io/react/) with [ReFlux](https://github.com/spoike/refluxjs) and [React-Router](https://github.com/rackt/react-router)

### Available Options

- Project/Site naming
- Default ignores for [Git](http://git-scm.com/) or [SVN](http://subversion.apache.org/)
- Stylesheets with [Less](http://lesscss.org/), [Sass](http://sass-lang.com/) (via [node-sass](https://github.com/andrew/node-sass)), [Stylus](http://learnboost.github.io/stylus/).
- Modular JavaScript with [Browserify](http://browserify.org/).
- JavaScript unit testing with [Jasmine](http://jasmine.github.io/) or [Mocha](http://visionmedia.github.io/mocha/) + [Chai](http://chaijs.com/)
- Test running with [Karma](http://karma-runner.github.io/0.12/index.html)

## Gulp Workflow

### `gulp`
Runs [`gulp test`](#gulp-test) and compiles/creates temporary server files

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|`gulp --production`| Builds out an optimized site through compilation of preprocessors (Jade, Sass, etc), minification of CSS and HTML, uglification of Javascript, and optimization of images.

### `gulp serve`
Starts up a development server that watches files and automatically reloads them to the browser when a change is detected.

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|`gulp serve --production`|  starts up a server that loads a production version of the site
|`gulp serve --open`|  starts up a server and opens it withing your default browser

### `gulp test`
Runs ESLint and Karma to lint and run JavaScript tests, respectively.

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|`gulp test --watch`| runs [`gulp test`](#gulp-test), but also watches test files and auto runs tests when changes are detected.

## Sub-Generators

#### React application
* [neopolitan:module](#react-module)

***Note: Generators need to be run from the root directory of your app.***

## React Sub-generators
***Note: (The following sub-generators can only be used with React applications)***

### React Module

Creates React Component File.

Example:

```
yo neopolitan:module mycomponent
? Where would you like to create this react component?: src/_modules
```

Produces:

```
src/_modules/mymodule/mymodule.jsx
src/_modules/mymodule/mymodule.{css,styl,less,scss,sass}
src/_modules/mymodule/__tests__/mymodule.spec.jsx
```

***NOTE: `{css,styl,less,scss,sass}` means that the file extension will match the preprocessor you chose: `CSS, Stylus, Less or Sass` respectively***

## Guides

### Adding third-party libraries
Odds are that you will need to add some third party libraries to your project at some point. To do so, it is strongly recommended that you install them using [NPM](http://npmjs.com/):

```
npm install [package name] --save
```

Once installed, you can access scripts within your JavaScript files like so:

```js
import $ from 'jquery';

$(function() {
  console.log('Hello');
});
```

And you can access stylesheets by importing them to you chosen preprocessor like so:

```scss
// SCSS
@import 'node_modules/normalize.css/normalize';
```

```sass
// SASS
@import node_modules/normalize.css/normalize
```

```less
// LESS
@import (inline) 'node_modules/normalize.css/normalize.css';
```

```stylus
// Stylus
@import '../../node_modules/normalize.css/normalize.css';
```

### Using SVN
If you plan on using SVN instead of Git, you will want to setup some default ignores to make sure you aren't committing extraneous/generated files to your codebase. To do this, adhere to the following steps:

#### Step 1
Create a new file in the root of your project named `.svnignore` and give it the following contents:

```
node_modules
*.log
build
.grunt
.serve
tmp
secrets.js
.DS_Store
.yo-rc.json
```

#### Step 2
Run the following command:

```
svn propset svn:ignore -R -F .svnignore .
```

This command will go through your newly created `.svnignore` file and set the specified files/folders to be ignored by SVN. 


## Common Issues

### ESLint giving errors for third-party scripts
##### Typical error message:
> jQuery is not defined

When adding third-party scripts, you should always import them to your `src/index.js` file (See [Adding third-party libraries](#adding-third-party-libraries)). 
However, doing so does not inform ESLint that your new library is defined globally. Thus, giving you errors.

##### Solution
To remedy this situation, all you need to do is open up your `.eslintrc` file in the root directory of you project, and add your new library name to the `global:` property array:

```
// .eslintrc
{
...
  globals: {
    jQuery: true // Tells ESLint that jQuery is defined globally
  }
...
}
```

## Testing Generator
To run unit tests, you have a couple options:

- `npm test`: This will run all unit tests with Mocha and send the report to [coveralls.io](http://coveralls.io) to be processed. (Don't run this for local testing)
- `npm run localtest`: This is the same as `npm test` only it doesn't send anything to coveralls.io. (Use this for local testing)
- `npm run localtest-report`: This is the same as `npm run localtest`, but it also generates an HTML report of the current code coverage.

## Roadmap
Check out the [Roadmap](ROADMAP.md) to see what's coming down the development pipeline.

## Contributing

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)

## Release History

See [Changelog](https://github.com/larsonjj/generator-neopolitan/blob/master/CHANGELOG.md)

## License

[MIT License](LICENSE.md) - &copy; Jake Larson
