import toPropertyKey from '../src/to-property-key-x';

const hasSymbols = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';

const coercibleObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return 3;
  },
};

const valueOfOnlyObject = {
  toString() {
    return {};
  },
  valueOf() {
    return 4;
  },
};

const toStringOnlyObject = {
  toString() {
    return 7;
  },
  valueOf() {
    return {};
  },
};

const objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];

const symbols = hasSymbols ? [Symbol.iterator, Symbol('foo')] : [];
const objectSymbols = symbols.map(Object);

const numbers = [0, -0, Infinity, -Infinity, 42];
const strings = ['', 'foo'];
const booleans = [true, false];

const nullPrimitives = [undefined, null];
const nonSymbolPrimitives = [].concat(nullPrimitives, booleans, strings, numbers);

describe('toPropertyKey', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof toPropertyKey).toBe('function');
  });

  it('should return the matching value', function() {
    expect.assertions(19);
    objects.concat(nonSymbolPrimitives).forEach(function(value) {
      expect(toPropertyKey(value)).toBe(String(value));
    });

    symbols.forEach(function(symbol) {
      expect(toPropertyKey(symbol)).toBe(symbol);
    });

    objectSymbols.forEach(function(objectSymbol, index) {
      expect(toPropertyKey(objectSymbol)).toBe(symbols[index]);
    });
  });

  it('should throw if not coercible', function() {
    expect.assertions(1);
    expect(function() {
      toPropertyKey(Object.create(null));
    }).toThrowErrorMatchingSnapshot();
  });
});
