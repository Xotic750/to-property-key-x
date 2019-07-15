import hasSymbols from 'has-symbol-support-x';
import toPrimitive from 'to-primitive-x';
import toStr from 'to-string-x';

/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|Symbol} The converted argument.
 */
export default function toPropertyKey(argument) {
  const key = toPrimitive(argument, String);

  return hasSymbols && typeof key === 'symbol' ? key : toStr(key);
}
