/**
 * Sort in ascending order.
 * 
 * @param {String|Number} a 
 * @param {String|Number} b 
 */
export function ascendingSort(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

/**
 * Sort in descending order.
 * 
 * @param {String|Number} a 
 * @param {String|Number} b 
 */
export function descendingSort(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }

  return 0;
}

/**
 * Sort in ascending order by length.
 * 
 * @param {String|Number} a 
 * @param {String|Number} b 
 */
export function lengthSort(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }

  return 0;
}

/**
 * Sort in ascending order by length.
 * 
 * @param {String|Number} a 
 * @param {String|Number} b 
 */
export function lengthReverseSort(a, b) {
  if (a.length < b.length) {
    return 1;
  }
  if (a.length > b.length) {
    return -1;
  }

  return 0;
}
