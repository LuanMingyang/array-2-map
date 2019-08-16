"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Convert an array to a map.
 * 
 * @param {Array} array The array that needs to be converted.
 * @param {String} key Used to indicate the object key.
 * @param {Function} valF
 *   The function used to indicate the value of an object. The argument is an array item. The array item is returned by default.
 * @return {Object} The object that is converted from the array.
 */
var toKeyMap = function toKeyMap(array, key) {
  var valF = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (x) {
    return x;
  };
  return array.reduce(function (acc, cur) {
    return _objectSpread({}, acc, _defineProperty({}, cur[key], valF(cur)));
  }, {});
};

module.exports = toKeyMap;