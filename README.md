# packed-array

<sup>**Social Media Photo by [Elevate](https://unsplash.com/@elevatebeer) on [Unsplash](https://unsplash.com/)**</sup>

[![Build Status](https://travis-ci.com/WebReflection/packed-array.svg?branch=master)](https://travis-ci.com/WebReflection/packed-array) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/packed-array/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/packed-array?branch=master)

An utility to create [fast, non-holey](https://v8.dev/blog/elements-kinds) arrays.

```js
import packedArray from 'packed-array';
const packedArray = require('packed-array');

// via unpkg, as global utility
// <script src="https://unpkg.com/packed-array">
```

## API

This utility has the exact same [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) API, except the first parameter can be an integer, as `length`, and the second one can be just a static value, to _fill_ the Array of specified `length` with such value.

```js
const array = packedArray(
  length, // either a number, or an object/array with a {length}
  fill,   // either a static value, or a function used via Array.from
  thisArg // optionally, if `fill` is a function, it will be passed as context
);
```

### Goal

Simplify the creation of arrays extremely fast to be looped or consumed within their `length` boundaries.

#### Native Alternative

If you're after just arrays with a length and some initial value, the following would likely perform better, producing the same result:

```js
// note the Array(length) is mandatory to obtain a packed kind
const array = Array.from(Array(length), () => value);
```
