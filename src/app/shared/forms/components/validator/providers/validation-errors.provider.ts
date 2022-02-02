import { Injectable } from '@angular/core';
import { ValidationErrorType } from '@shared/forms/components/validator/enums';
import { ValidationErrorVariable } from '@shared/forms/components/validator/enums/validation-error.variable';

type Argument = { [key in ValidationErrorVariable]: string | number };

@Injectable({
  providedIn: 'root',
})
export class ValidationErrorsProvider {
  private readonly messages: Record<ValidationErrorType, string> = {
    [ValidationErrorType.CUSTOM]: `{${ValidationErrorVariable.CUSTOM}}.`,
    [ValidationErrorType.MAX]: `Maksymalna wartość dla pola powinna wynosić: {${ValidationErrorVariable.MAX}}.`,
    [ValidationErrorType.MIN]: `Minimalna wartość dla pola powinna wynosić: {${ValidationErrorVariable.MIN}}.`,
    [ValidationErrorType.REQUIRED]: 'To pole jest wymagane.',
    [ValidationErrorType.EMPTY]: '',
  };

  public message(error: ValidationErrorType, argument: Argument): string {
    const template = this.messages[error];
    const variables = Object.keys(argument) as ValidationErrorVariable[];

    return variables.reduce((message, key) => {
      const variable = `{${key}}`;
      const value = `${argument[key]}`;

      return message.replace(variable, value);
    }, template);
  }
}
