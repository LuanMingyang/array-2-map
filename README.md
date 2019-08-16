# array-to-map

A tool that converts an array to a map.

## Installation

```
npm install array-2-map
```

## Usage

```javascript
const toKeyMap = require('array-2-map');

const map = toKeyMap([1, 2, "abc"]);

const array = [
  { value: 'key1', label: 'KEY1' },
  { value: 'key2', label: 'KEY2' }
];

const map1 = toKeyMap(array, 'value');
// { key1: { value: 'key1', label: 'KEY1' }, key2: { value: 'key2', label: 'KEY2' } }

const map2 = toKeyMap(array, 'value', x => x.label);
// {key1: "KEY1", key2: "KEY2"}
```

