export const isBoolean = (predictable: unknown): predictable is boolean =>
  typeof predictable === 'boolean';
