type Nullish = undefined | null;

export const isNil = (predictable: unknown): predictable is Nullish =>
  predictable === undefined || predictable === null;
