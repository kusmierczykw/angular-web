export const isUndefined = (predictable: unknown): predictable is undefined =>
  predictable === 'undefined';
