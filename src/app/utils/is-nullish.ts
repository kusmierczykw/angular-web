type Nullish = undefined | null;

export const isNullish = (predictable: unknown): predictable is Nullish =>
  predictable === undefined || predictable === null;
