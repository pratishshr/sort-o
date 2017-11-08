import { expect } from 'chai';

import { isObject } from '../src/utils/object';
import { sort, sortOrder } from '../src';

/**
 * Traverse object to get the concatenated keys.
 * 
 * @example
 * getDeepKeys({a: {a: 1}, b: 2}) => ['a.a', 'b']
 * 
 * @param {Object} obj 
 */
function getDeepKeys(obj) {
  let keys = [];

  for (let [key, value] of Object.entries(obj)) {
    keys.push(key);

    if (isObject(value)) {
      let subkeys = getDeepKeys(obj[key]);
      keys = keys.concat(subkeys.map(subkey => key + '.' + subkey));
    }
  }

  return keys;
}

describe('sorto', function() {
  describe('sort', function() {
    it('should sort keys in ascending order when order = "asc".', () => {
      let input = { a: 1, c: 3, d: 4, b: 2 };
      let sortedOutput = { a: 1, b: 2, c: 3, d: 4 };

      expect(getDeepKeys(sort(input, sortOrder.ASC))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should sort keys in descending order when order = "desc".', () => {
      let input = { a: 1, c: 3, d: 4, b: 2 };
      let sortedOutput = { d: 1, c: 2, b: 3, a: 4 };

      expect(getDeepKeys(sort(input, sortOrder.DESC))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should sort keys in ascending order by default when an order is not defined.', () => {
      let input = { a: 1, c: 3, d: 4, b: 2 };
      let sortedOutput = { a: 1, b: 2, c: 3, d: 4 };

      expect(getDeepKeys(sort(input))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should perform a deep sort in ascending order when order = "asc"', () => {
      let input = { a: 1, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } }, b: 2 };
      let sortedOutput = { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } } };

      expect(getDeepKeys(sort(input, sortOrder.ASC))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should perform a deep sort in descending order when order = "desc" ', () => {
      let input = { a: 1, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } }, b: 2 };
      let sortedOutput = { c: { c: { c: { b: 2, a: 1 }, b: 2, a: 1 }, b: 2, a: 1 }, b: 2, a: 1 };

      expect(getDeepKeys(sort(input, sortOrder.DESC))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should perform a deep sort in ascending order by default when an order is not defined.', () => {
      let input = { a: 1, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } }, b: 2 };
      let sortedOutput = { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } } };

      expect(getDeepKeys(sort(input))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should sort array in ascending order.', () => {
      let input = [2, 4, 1, 3, 5];
      let sortedOutput = [1, 2, 3, 4, 5];

      expect(sort(input, sortOrder.ASC)).to.have.ordered.members(sortedOutput);
    });

    it('should sort array in descending order.', () => {
      let input = [2, 4, 1, 3, 5];
      let sortedOutput = [5, 4, 3, 2, 1];

      expect(sort(input, sortOrder.DESC)).to.have.ordered.members(sortedOutput);
    });

    it('should sort array in ascending order by default when an order is not defined.', () => {
      let input = [2, 4, 1, 3, 5];
      let sortedOutput = [1, 2, 3, 4, 5];

      expect(sort(input)).to.have.ordered.members(sortedOutput);
    });

    it('should sort array by length in ascending when an order = "length"', () => {
      let input = ['bb', 'dddd', 'a', 'ccc'];
      let sortedOutput = ['a', 'bb', 'ccc', 'dddd'];

      expect(sort(input, sortOrder.LENGTH)).to.have.ordered.members(sortedOutput);
    });

    it('should sort array by length in descending when an order = "length_reverse"', () => {
      let input = ['bb', 'dddd', 'a', 'ccc'];
      let sortedOutput = ['dddd', 'ccc', 'bb', 'a'];

      expect(sort(input, sortOrder.LENGTH_REVERSE)).to.have.ordered.members(sortedOutput);
    });

    it('should sort data as per the comparator supplied', () => {
      let input = [1, 2, 3, 4];
      let sortedOutput = [1, 4, 3, 2];
      let comparator = (a, b) => {
        if (a == 1 || a > b) {
          return -1;
        }
        if (a < b) {
          return 1;
        }

        return 0;
      };

      expect(sort(input, comparator)).to.have.ordered.members(sortedOutput);
    });
  });
});
