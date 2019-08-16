const assert = require("assert");
const toKeyMap = require("../index.js");


describe('array2map', function () {
  const key = 'value';
  const array = [
    { value: 'CN', label: '中国' },
    { value: 'HK', label: '中国-香港特别行政区' },
    { value: 'MO', label: '中国-澳门特别行政区' },
    { value: 'TW', label: '中国-台湾省' },
  ];

  it('should generate a map with a value of an array item', function () {
    const map = toKeyMap(array, key);

    array.forEach(item => {
      assert.equal(item, map[item[key]]);
    });
  });

  it('should generate a map with the value of the label of the array item', function () {
    const map = toKeyMap(array, key, x => x.label);

    array.forEach(item => {
      assert.equal(item.label, map[item[key]]);
    });
  });
});
