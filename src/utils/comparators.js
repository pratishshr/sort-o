/**
 * Comparator for sorting in ascending order.
 * 
 * @param {String|Number} a 
 * @param {String|Number} b 
 */
export function ascending(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}

/**
 * Comparator for sorting in descending order.
 * 
 * @param {String|Number} a 
 * @param {String|Number} b 
 */
export function descending(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }

  return 0;
}
