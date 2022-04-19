export const isString = (predictable: unknown): predictable is string =>
  typeof predictable === 'string';
