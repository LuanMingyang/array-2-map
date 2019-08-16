# array-2-map

[![Build Status](https://travis-ci.org/LuanMingyang/array-2-map.svg?branch=master)](https://travis-ci.org/LuanMingyang/array-2-map)
[![Coverage Status](https://coveralls.io/repos/github/LuanMingyang/array-2-map/badge.svg?branch=master)](https://coveralls.io/github/LuanMingyang/array-2-map?branch=master)
[![License](https://img.shields.io/github/license/LuanMingyang/array-2-map.svg?maxAge=2592000)](https://github.com/LuanMingyang/array-2-map/blob/master/LICENSE)

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

