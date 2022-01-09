export class RequiredParameterException extends Error {
  public constructor(param: string) {
    super(`The param ${param} is required.`);
  }
}
