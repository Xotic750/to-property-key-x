'use strict';

var toPropertyKey;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  toPropertyKey = require('../../index.js');
} else {
  toPropertyKey = returnExports;
}

var hasSymbols = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

var coercibleObject = {
  toString: function () {
    return 42;
  },
  valueOf: function () {
    return 3;
  }
};

var valueOfOnlyObject = {
  toString: function () {
    return {};
  },
  valueOf: function () {
    return 4;
  }
};

var toStringOnlyObject = {
  toString: function () {
    return 7;
  },
  valueOf: function () {
    return {};
  }
};

var objects = [
  {},
  coercibleObject,
  toStringOnlyObject,
  valueOfOnlyObject
];

var symbols = hasSymbols ? [Symbol.iterator, Symbol('foo')] : [];

var numbers = [
  0,
  -0,
  Infinity,
  -Infinity,
  42
];
var strings = ['', 'foo'];
var booleans = [true, false];

var nullPrimitives = [undefined, null];
var nonSymbolPrimitives = [].concat(nullPrimitives, booleans, strings, numbers);

describe('toPropertyKey', function () {
  it('is a function', function () {
    expect(typeof toPropertyKey).toBe('function');
  });

  it('should return the matching value', function () {
    objects.concat(nonSymbolPrimitives).forEach(function (value) {
      expect(toPropertyKey(value)).toBe(String(value));
    });

    symbols.forEach(function (symbol) {
      expect(toPropertyKey(symbol)).toBe(Symbol.prototype.toString.call(symbol));
    });
  });
});
