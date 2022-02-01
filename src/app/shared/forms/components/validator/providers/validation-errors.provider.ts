import { Injectable } from '@angular/core';
import { ValidationErrorType } from '@shared/forms/components/validator/enums';

type Argument = { [key: string]: string | number };

@Injectable({
  providedIn: 'root',
})
export class ValidationErrorsProvider {
  private readonly messages: Record<
    ValidationErrorType,
    (argument: Argument) => string
  > = {
    [ValidationErrorType.MAX]: ({ max }) =>
      `Maksymalna wartość dla pola powinna wynosić ${max}.`,
    [ValidationErrorType.MIN]: ({ min }) =>
      `Minimalna wartość dla pola powinna wynosić: ${min}.`,
    [ValidationErrorType.REQUIRED]: () => 'To pole jest wymagane.',
    [ValidationErrorType.EMPTY]: () => '',
  };

  public message(key: ValidationErrorType, argument: Argument = {}): string {
    return this.messages[key](argument);
  }
}
