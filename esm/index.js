const identity = $ => $;
export default (length, fn, self) => Array.from(
  typeof length === 'number' ? {length} : length,
  typeof fn === 'function' ? fn : () => fn,
  self
).map(identity);
