import { isObject } from './utils/object';
import { ascending, descending } from './utils/comparators';

export const ASC_ORDER = 'asc';
export const DESC_ORDER = 'desc';

/**
 * Returns appropriate comparator as per the sort string.
 * If a function is supplied, it returns that function itself.
 * 
 * @param {String|Function} sortOrder 
 * @returns {Function}
 */
function getComparator(sortOrder) {
  if (typeof sortOrder === 'function') {
    return sortOrder;
  }

  const comparators = {
    [ASC_ORDER]: ascending,
    [DESC_ORDER]: descending
  };

  return comparators[sortOrder];
}

/**
 * Sorts object keys as per the specified order.
 * 
 * @param {Object} data 
 * @param {String|Function} = 'asc' sortOrder 
 */
export function sort(data, sortOrder = ASC_ORDER) {
  if (!isObject(data)) {
    throw new Error('Supplied data is not a valid Object');
  }

  let sortedData = {};
  let comparator = getComparator(sortOrder);
  let sortedKeys = Object.keys(data).sort(comparator);

  sortedKeys.forEach(key => {
    if (isObject(data[key])) {
      sortedData[key] = sort(data[key], sortOrder);
    } else {
      sortedData[key] = data[key];
    }
  });

  return sortedData;
}
