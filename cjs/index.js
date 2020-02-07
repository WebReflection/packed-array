'use strict';
const identity = $ => $;
module.exports = (length, fn, self) => Array.from(
  typeof length === 'number' ? {length} : length,
  typeof fn === 'function' ? fn : () => fn,
  self
).map(identity);
