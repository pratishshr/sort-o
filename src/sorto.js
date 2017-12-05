import { isObject } from './utils/object';
import { ascendingSort, descendingSort, lengthSort, lengthReverseSort } from './utils/comparators';

import { ASC, DESC, ASC_LENGTH, DESC_LENGTH } from './constants/sortOrder';

/**
 * Returns appropriate comparator as per the sort string.
 * If a function is supplied, it returns the function itself.
 *
 * @param {String|Function} sortOrder
 * @returns {Function}
 */
function getComparator(sortOrder) {
  if (typeof sortOrder === 'function') {
    return sortOrder;
  }

  const comparators = {
    [ASC]: ascendingSort,
    [DESC]: descendingSort,
    [ASC_LENGTH]: lengthSort,
    [DESC_LENGTH]: lengthReverseSort
  };

  return comparators[sortOrder];
}

/**
 * Sort an array as per the specified order.
 *
 * @param {Array} data
 * @param {String|Function} = 'asc' sortOrder
 * @returns {Array}
 */
export function sort(data, sortOrder = ASC) {
  if (!Array.isArray(data)) {
    throw new Error('Supplied data is not a valid Array');
  }

  const comparator = getComparator(sortOrder);

  return data.sort(comparator);
}

/**
 * Sort keys of an object as per the specified order.
 *
 * @param {Object} data
 * @param {String|Function} = 'asc' sortOrder
 * @returns {Object}
 */
export function sortKeys(data, sortOrder = ASC) {
  if (!isObject(data)) {
    throw new Error('Supplied data is not a valid Object');
  }

  const comparator = getComparator(sortOrder);

  let sortedData = {};
  let sortedKeys = Object.keys(data).sort(comparator);

  sortedKeys.forEach(key => {
    if (isObject(data[key])) {
      sortedData[key] = sortKeys(data[key], comparator);
    } else {
      sortedData[key] = data[key];
    }
  });

  return sortedData;
}
