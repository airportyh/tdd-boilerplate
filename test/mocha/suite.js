// mocha/suite.js

var boilerplate;
var assert;  // <= add this line

if (typeof require == 'function') {
  // enable to re-use in a browser without require.js
  boilerplate = require('../../index.js');
  assert =  require('assert');  // <= add this line
}

describe('smoke test', function() {
  it('should pass', function () {
    assert.equal(boilerplate(), 'boilerplate', 'boilerplate');
  });
});