/**
 * @file Converts argument to a value that can be used as a property key.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-property-key-x
 */

'use strict';

var hasSymbols = require('has-symbol-support-x');
var toPrimitive = require('to-primitive-x');
var toStr = require('to-string-x');

var $toPropertyKey = function toPropertyKey(argument) {
  var key = toPrimitive(argument, String);
  return hasSymbols && typeof key === 'symbol' ? key : toStr(key);
};

/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to onvert to a property key.
 * @returns {string|symbol} The converted argument.
 * @example
 * var toPropertyKey = require('to-property-key-x');
 *
 * toPropertyKey(); // 'undefined'
 * toPropertyKey(1); // '1'
 * toPropertyKey(true); // 'true'
 * var symbol = Symbol('a');
 * toPropertyKey(symbol); // symbol
 */
module.exports = $toPropertyKey;
