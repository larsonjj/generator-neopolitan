/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var IndexPage = function() {
  this.heroEl = element(by.css('.yeogurt-info'));
  this.h1El = this.heroEl.element(by.css('h1'));
  this.imgEl = this.heroEl.element(by.css('img.logo'));
};

module.exports = new IndexPage();
