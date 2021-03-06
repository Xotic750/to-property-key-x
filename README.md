<a
  href="https://travis-ci.org/Xotic750/to-property-key-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/to-property-key-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/to-property-key-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/to-property-key-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/to-property-key-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/to-property-key-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/to-property-key-x"
  title="npm version">
<img src="https://badge.fury.io/js/to-property-key-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/to-property-key-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/to-property-key-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/to-property-key-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/to-property-key-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/to-property-key-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/to-property-key-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_to-property-key-x"></a>

## to-property-key-x

Converts argument to a value that can be used as a property key.

**Version**: 2.0.2  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](https://opensource.org/licenses/MIT)  
**Copyright**: Xotic750  
<a name="exp_module_to-property-key-x--module.exports"></a>

### `module.exports(argument)` ⇒ <code>string</code> \| <code>symbol</code> ⏏

This method Converts argument to a value that can be used as a property key.

**Kind**: Exported function  
**Returns**: <code>string</code> \| <code>symbol</code> - The converted argument.  
**Throws**:

- <code>TypeError</code> If argument is not a symbol and is not coercible to a string.

| Param    | Type            | Description                               |
| -------- | --------------- | ----------------------------------------- |
| argument | <code>\*</code> | The argument to onvert to a property key. |

**Example**

```js
import toPropertyKey from 'to-property-key-x';

console.log(toPropertyKey()); // 'undefined'
console.log(toPropertyKey(1)); // '1'
console.log(toPropertyKey(true)); // 'true'

const symbol = Symbol('a');
console.log(toPropertyKey(symbol)); // symbol

toPropertyKey(Object.create(null)); // TypeError
```
