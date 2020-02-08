var packedArray = (function (exports) {
  'use strict';

  var index = (function (sizer, fn, self) {
    var out = [];

    for (var isFunction = typeof fn === 'function', length = typeof sizer === 'number' ? sizer : sizer.length, i = 0; i < length; i++) {
      out.push(isFunction ? fn.call(self, sizer[i], i) : fn);
    }

    return out;
  });

  exports.default = index;

  return exports;

}({}).default);
