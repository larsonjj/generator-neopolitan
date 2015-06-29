<p align="center">
  <img src="https://raw.githubusercontent.com/larsonjj/generator-neopolitan/master/docs/images/logo.png" />
</p>

# Neopolitan Generator [![Build Status](https://secure.travis-ci.org/larsonjj/generator-neopolitan.png?branch=master)](https://travis-ci.org/larsonjj/generator-neopolitan) [![NPM version](https://badge.fury.io/js/generator-neopolitan.png)](http://badge.fury.io/js/generator-neopolitan) [![Coverage Status](https://coveralls.io/repos/larsonjj/generator-neopolitan/badge.png)](https://coveralls.io/r/larsonjj/generator-neopolitan)

A "Choose your own adventure" generator for creating single page applications. Helps you harness the power of your favorite tools: Angular, React + Flux, Backbone, Gulp, and much more!

# Table of Contents

- [What can I create with Neopolitan?](#what-can-i-create-with-neopolitan)
- [Getting Started](#getting-started)
- [Features](#features)
- [Gulp Workflow](#gulp-workflow)
- [Sub-Generators](#sub-generators)
- [Automated Documentation](#automated-documentation)
- [Common Issues](#common-issues)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Release History](#release-history)
- [License](#license)

## What can I create with Neopolitan?
### Create Single Page Applications using one of the following:
-  [Angular](https://angularjs.org/), 
-  [Backbone](http://backbonejs.org/)
-  [React](http://facebook.github.io/react/) + [Flux](http://facebook.github.io/react/docs/flux-overview.html).

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

- `gulp` for testing and building a production version of your site.
- `gulp serve` for previewing your site/app on a development server.
- `gulp serve:dist` for previewing a production version of your site/app.
- `gulp test` for linting your scripts running unit tests.
- `gulp test:e2e` for running end-to-end functional tests.

You can learn more about what tasks are available in the [gulp tasks](#gulp-workflow) section.

> IMPORTANT: SVN users should choose the 'SVN' version control option when running the generator. Then be sure to run the `svn-init.sh` (Linux, OSX) or `svn-init.bat` (Window) script in order to correctly setup ignores for your project. These scripts will be located in the root of your project folder. It is recommended that you do this before committing any code.

Congratulations! You should now have successfully created a Neopolitan project and are ready to start building out your site/app.


## Features

### Included in every project
- Built in preview server with [BrowserSync](http://www.browsersync.io/)
- [.editorconfig](http://editorconfig.org/) for consistent coding styles within text editors
- Automated build process that includes: compilation of preprocessors (Jade, Sass, etc), minification of CSS and HTML, uglification of Javascript, optimization of images, and processing of [usemin blocks](Usemin blocks)
- [Sourcemaps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) for JavaScript and Stylesheets
- JavaScript Linting with [ESLint](http://eslint.org//)

### Available Options

- Project/Site naming
- Default ignores for [Git](http://git-scm.com/) or [SVN](http://subversion.apache.org/)
- Stylesheets with [Less](http://lesscss.org/), [Sass](http://sass-lang.com/) (via [node-sass](https://github.com/andrew/node-sass)), [Stylus](http://learnboost.github.io/stylus/).
- Modular JavaScript with [Browserify](http://browserify.org/).
- JavaScript unit testing with [Jasmine](http://jasmine.github.io/) or [Mocha](http://visionmedia.github.io/mocha/) + [Chai](http://chaijs.com/)
- Test running with [Karma](http://karma-runner.github.io/0.12/index.html)
- End-to-end test running with [Protractor](https://angular.github.io/protractor/#/)

### Single Page Application Options
- [Angular](https://angularjs.org/)

- Facebook's [React](http://facebook.github.io/react/) with [ReFlux](https://github.com/spoike/refluxjs)

- Backbone with [underscore](http://underscorejs.com/) templating


## Gulp Workflow

### `gulp`
Runs both [`gulp test`](#gulp-test) and [`gulp build`](#gulp-build).

### `gulp serve`
Starts up a development server that watches files and automatically reloads them to the browser when a change is detected.

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|gulp serve:build| runs [`gulp build`](#gulp-build) and starts up a server that loads the optimized files

### `gulp build`
Builds out an optimized site through compilation of preprocessors (Jade, Sass, etc), minification of CSS and HTML, uglification of Javascript, optimization of images, and processing of [usemin blocks](Usemin blocks). All files created from this task are put in the `{project root}/build/` folder.

### `gulp test`
Runs ESLint and Karma to lint and run JavaScript tests, respectively.

**Extra Task Target(s)**

|Tasks| Description
|---------|-------
|gulp test:watch| runs [`gulp test`](#gulp-test), but also watches test files and auto runs tests when changes are detected.
|gulp test:e2e| runs end-to-end functional tests using [Protractor](https://angular.github.io/protractor/#/).

## Sub-Generators

#### React application
* [neopolitan:react](#react-module)

#### Backbone application
* [neopolitan:module](#backbone-module)
* [neopolitan:model](#model)
* [neopolitan:collection](#collection)

#### Angular application
* [neopolitan:module](#angular-module)
* [neopolitan:controller](#controller)
* [neopolitan:directive](#directive)
* [neopolitan:filter](#filter)
* [neopolitan:decorator](#decorator)
* [neopolitan:service](#service)
* [neopolitan:factory](#factory)
* [neopolitan:provider](#provider)

***Note: Generators need to be run from the root directory of your app.***

## React Sub-generators
***Note: (The following sub-generators can only be used with React applications)***

### Module

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

## Backbone Sub-generators
***Note: (The following sub-generators can only be used with Backbone applications)***

### Module
Creates a Backbone view along with a corresponding template:

Example:

```
yo neopolitan:module mymodule
? Where would you like to create this view?: src/_modules
```

Produces:

```
src/_modules/mymodule/mymodule.js
src/_modules/mymodule/mymodule.jst
src/_modules/mymodule/mymodule.{css,styl,less,scss,sass}
src/_modules/mymodule/__tests__/mymodule.spec.js
```

***NOTE: `{css,styl,less,scss,sass}` means that the file extension will match the preprocessor you chose: `CSS, Stylus, Less or Sass` respectively***

### Model

Creates a Backbone model.

Example:

```
yo neopolitan:model mymodel
? Where would you like to create this model?: src/_scripts/models
```

Produces:

```
src/_scripts/models/mymodel.js
src/_scripts/models/__tests__/mymodel.spec.js
```

### Collection

Creates a Backbone collection file with the ability to specify which Backbone model to use.

Example:

```
yo neopolitan:model mycollection
? Where would you like to create this collection?: src/_scripts/collections
? What is the name of the model you would like to use with this collection?: mycollection-model
? What folder is the model file located in?: src/_scripts/models
```

Produces:

```
src/_scripts/collections/mycollection.js
src/_scripts/collections/__tests__/mycollection.spec.js
```

## Angular Sub-generators
***Note: (The following sub-generators can only be used with Angular applications)***

### Module
Creates an Angular template:

Example:

```
yo neopolitan:module contact
? Where would you like to create this view?: src/module
```

Produces:

```
src/_modules/contact/contact.html
src/_modules/contact/contact.controller.js
src/_modules/contact/__tests__/contact.controller.spec.js
src/_modules/contact/contact.{css,styl,less,scss,sass}
src/_modules/contact/contact.js
```

***NOTE: `{css,styl,less,scss,sass}` means that the file extension will match the preprocessor you chose: `CSS, Stylus, Less or Sass` respectively***

### Controller
Creates an Angular controller:

Example:

```
yo neopolitan:controller mycontroller
? Where would you like to create this controller?: src/_modules
```

Produces:

```
src/_modules/mycontroller/mycontroller.controller.js
src/_modules/mycontroller/__tests__/mycontroller.controller.spec.js
```

### Directive
Creates an Angular directive:

Example:

```
yo neopolitan:directive mydirective
? Where would you like to create this directive?: src/_modules
? Does this directive need an HTML template?: Yes
```

Produces:

```
src/_modules/mydirective/mydirective.directive.js
src/_modules/mydirective/__tests__/mydirective.directive.spec.js
src/_modules/mydirective/mydirective.html (optional)
```

### Filter
Creates an Angular filter:

Example:

```
yo neopolitan:filter myfilter
? Where would you like to create this filter?: src/_modules
```

Produces:

```
src/_modules/myfilter/myfilter.filter.js
src/_modules/myfilter/__tests__/myfilter.filter.spec.js
```

### Decorator
Creates an Angular decorator:

Example:

```
yo neopolitan:decorator mydecorator
? Where would you like to create this decorator?: src/_modules
```

Produces:

```
src/_modules/mydecorator/mydecorator.decorator.js
```

### Service
Creates an Angular service:

Example:

```
yo neopolitan:service myservice
? Where would you like to create this service?: src/_modules
```

Produces:

```
src/_modules/myservice/myservice.service.js
src/_modules/myservice/__tests__/myservice.service.spec.js
```

### Factory
Creates an Angular factory:

Example:

```
yo neopolitan:factory myfactory
? Where would you like to create this factory?: src/_modules
```

Produces:

```
src/_modules/myfactory/myfactory.factory.js
src/_modules/myfactory/__tests__/myfactory.factory.spec.js
```

### Provider
Creates an Angular provider:

Example:

```
yo neopolitan:provider myprovider
? Where would you like to create this provider?: src/_modules
```

Produces:

```
src/_modules/myprovider/myprovider.provider.js
src/_modules/myprovider/__tests__/myprovider.provider.spec.js
```

## Common Issues

### ESLint giving errors for third-party scripts
##### Typical error message:
> Backbone is not defined

When adding third-party scripts, you should always link to them using `<script>` tags within your base template file (See [Adding third-party libraries](#adding-third-party-libraries)). However, doing so does not inform ESLint that your new library is defined globally. Thus, giving you errors.

##### Solution
To remedy this situation, all you need to do is open up your `.eslintrc` file in the root directory of you project, and add your new library name to the `global:` property array:

```
// .eslintrc
{
...
  globals: {
    Backbone: true // Tells ESLint that Backbone is defined globally
  }
...
}
```

## Testing
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
