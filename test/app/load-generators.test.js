/*global describe, beforeEach, it*/
'use strict';

var assert = require('assert');

describe('Neopolitan generator and sub-generators', function() {
  it('can be imported without blowing up', function() {
    assert(require('../../app') !== undefined);
    // Sub-generators
    assert(require('../../module') !== undefined);
  });
});
