type Nil = undefined | null;

export const isNil = (predictable: unknown): predictable is Nil =>
  predictable === undefined || predictable === null;
