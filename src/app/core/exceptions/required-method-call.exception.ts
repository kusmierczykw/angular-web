export class RequiredMethodCallException extends Error {
  public constructor(method: string) {
    super(`The method ${method} was not called.`);
  }
}
