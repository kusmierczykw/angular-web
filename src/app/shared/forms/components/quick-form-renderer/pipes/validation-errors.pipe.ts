import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { ValidationErrorsProvider } from '@shared/forms/components/quick-form-renderer/providers/validation-errors.provider';

@Pipe({
  name: 'validationErrors',
})
export class ValidationErrorsPipe implements PipeTransform {
  public constructor(
    private readonly validationErrorsProvider: ValidationErrorsProvider,
  ) {}

  public transform(errors: ValidationErrors): string {
    return Object.keys(errors)
      .map((key) => this.validationErrorsProvider.message(key))
      .join('\n');
  }
}
