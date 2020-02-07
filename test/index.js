const packedArray = require('../cjs');

console.assert(packedArray(1, 0).length === 1, 'expected length of 1');
console.assert(packedArray([1, 2], 0).length === 2, 'expected length of 2');
console.assert(packedArray(3, () => Math.random()).length === 3, 'expected length of 3');
console.assert(JSON.stringify(packedArray([1, 2, 3], value => value * 2)) === JSON.stringify([2, 4, 6]), 'expected outcome');
console.assert(packedArray(1, function () { return this; }, JSON)[0] === JSON, 'expected context');
