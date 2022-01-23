export class UnimplementedMethodException extends Error {
  public constructor() {
    super(`The method is unimplemented.`);
  }
}
