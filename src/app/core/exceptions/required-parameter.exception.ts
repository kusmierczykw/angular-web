export class RequiredParameterException extends Error {
  public constructor(parameter: string) {
    super(`The param ${parameter} is required.`);
  }
}
