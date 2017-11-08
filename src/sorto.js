import { isObject } from './utils/object';
import { ascendingSort, descendingSort, lengthSort, lengthReverseSort } from './utils/comparators';

import { ASC, DESC, LENGTH, LENGTH_REVERSE } from './constants/sortType';

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
    [LENGTH]: lengthSort,
    [LENGTH_REVERSE]: lengthReverseSort
  };

  return comparators[sortOrder];
}

/**
 * Deep sort object keys as per the given comparator
 * 
 * @param {Object} data 
 * @param {Function} comparator 
 */
function sortObject(data, comparator) {
  let sortedData = {};
  let sortedKeys = Object.keys(data).sort(comparator);

  sortedKeys.forEach(key => {
    if (isObject(data[key])) {
      sortedData[key] = sortObject(data[key], comparator);
    } else {
      sortedData[key] = data[key];
    }
  });

  return sortedData;
}

/**
 * Sort an array as per the given comparator
 * 
 * @param {Array} data 
 * @param {Function} comparator 
 */
function sortArray(data, comparator) {
  let sortedData = {};

  return data.sort(comparator);
}

/**
 * Sort data as per the specified order.
 * 
 * @param {Object|Array} data 
 * @param {String|Function} = 'asc' sortOrder 
 */
export function sort(data, sortOrder = ASC) {
  const comparator = getComparator(sortOrder);

  if (isObject(data)) {
    return sortObject(data, comparator);
  }

  if (Array.isArray(data)) {
    return sortArray(data, comparator);
  }

  throw new Error('Supplied data is not a valid Object');
}
