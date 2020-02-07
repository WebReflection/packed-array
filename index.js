var packedArray = (function (exports) {
  'use strict';

  var identity = function identity($) {
    return $;
  };

  var index = (function (length, fn, self) {
    return Array.from(typeof length === 'number' ? {
      length: length
    } : length, typeof fn === 'function' ? fn : function () {
      return fn;
    }, self).map(identity);
  });

  exports.default = index;

  return exports;

}({}).default);
