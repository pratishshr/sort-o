import { expect } from 'chai';

import { isObject } from '../src/utils/object';
import { sort, ASC_ORDER, DESC_ORDER } from '../src/sorto';

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

      expect(getDeepKeys(sort(input, ASC_ORDER))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should sort keys in descending order when order = "desc".', () => {
      let input = { a: 1, c: 3, d: 4, b: 2 };
      let sortedOutput = { d: 1, c: 2, b: 3, a: 4 };

      expect(getDeepKeys(sort(input, DESC_ORDER))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should sort keys in ascending order by default when an order is not defined.', () => {
      let input = { a: 1, c: 3, d: 4, b: 2 };
      let sortedOutput = { a: 1, b: 2, c: 3, d: 4 };

      expect(getDeepKeys(sort(input))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should perform a deep sort in ascending order when order = "asc"', () => {
      let input = { a: 1, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } }, b: 2 };
      let sortedOutput = { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } } };

      expect(getDeepKeys(sort(input, 'asc'))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should perform a deep sort in ascending order when order = "desc" ', () => {
      let input = { a: 1, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } }, b: 2 };
      let sortedOutput = { c: { c: { c: { b: 2, a: 1 }, b: 2, a: 1 }, b: 2, a: 1 }, b: 2, a: 1 };

      expect(getDeepKeys(sort(input, 'desc'))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });

    it('should perform a deep sort in ascending order by default when an order is not defined.', () => {
      let input = { a: 1, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } }, b: 2 };
      let sortedOutput = { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2, c: { a: 1, b: 2 } } } };

      expect(getDeepKeys(sort(input, 'asc'))).to.have.ordered.members(getDeepKeys(sortedOutput));
    });
  });
});
