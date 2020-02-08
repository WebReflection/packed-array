var packedArray = (function (exports) {
  'use strict';

  /**
   * An utility to created packed arrays 
   *
   * @param {(number | Array)} sizer - Either the length of the new Array or an Array
   * @param {(Function | any)} filler - Either a function to invoke per each index, or a value to fill the Array
   * @param {any=undefined} self - The context to use via the `filler`, if it's a Function
   * @return {Array<filler>} The Array of length `sizer` filled via the `filler`
   */
  var index = (function (sizer, filler, self) {
    var out = [];

    for (var isFunction = typeof filler === 'function', length = typeof sizer === 'number' ? sizer : sizer.length, i = 0; i < length; i++) {
      out.push(isFunction ? filler.call(self, sizer[i], i) : filler);
    }

    return out;
  });

  exports.default = index;

  return exports;

}({}).default);
