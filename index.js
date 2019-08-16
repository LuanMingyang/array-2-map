/**
 * Convert an array to a map.
 * 
 * @param {Array} array The array that needs to be converted.
 * @param {String} key Used to indicate the object key.
 * @param {Function} valF
 *   The function used to indicate the value of an object. The argument is an array item. The array item is returned by default.
 * @return {Object} The object that is converted from the array.
 */
const toKeyMap = (array, key, valF = x => x) => {
  return array.reduce((acc, cur) => ({ ...acc, [cur[key]]: valF(cur) }), {});
}

module.exports = toKeyMap;
