export const isDate = (predictable: unknown): predictable is Date =>
  predictable instanceof Date;
