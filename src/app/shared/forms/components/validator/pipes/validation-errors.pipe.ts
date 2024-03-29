import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ValidationErrorsProvider } from '@shared/forms/components/validator/providers/validation-errors.provider';
import { ValidationErrorType } from '@shared/forms/components/validator/enums/validation-error-type';

@Pipe({
  name: 'validationErrors',
})
export class ValidationErrorsPipe implements PipeTransform {
  public constructor(
    private readonly validationErrorsProvider: ValidationErrorsProvider,
  ) {}

  public transform(errors: ValidationErrors): string[] {
    const keys = Object.keys(errors) as ValidationErrorType[];

    return keys.map((key) =>
      this.validationErrorsProvider.message(key, errors[key]),
    );
  }
}
