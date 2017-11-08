/**
 * Check if a given input is of type "Object"
 * 
 * @param {any} input 
 */
export function isObject(input) {
  return input instanceof Object && input.constructor === Object;
}
