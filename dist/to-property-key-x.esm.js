function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import hasSymbols from 'has-symbol-support-x';
import toPrimitive from 'to-primitive-x';
import toStr from 'to-string-x';
/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|symbol} The converted argument.
 */

var toPropertyKey = function toPropertyKey(argument) {
  var key = toPrimitive(argument, String);
  return hasSymbols && _typeof(key) === 'symbol' ? key : toStr(key);
};

export default toPropertyKey;

//# sourceMappingURL=to-property-key-x.esm.js.map