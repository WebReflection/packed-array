'use strict';
module.exports = (sizer, fn, self) => {
  const out = [];
  for (let
    isFunction = typeof fn === 'function',
    length = typeof sizer === 'number' ? sizer : sizer.length,
    i = 0; i < length; i++
  )
    out.push(isFunction ? fn.call(self, sizer[i], i) : fn);
  return out;
};
