import { FormControl, ValidatorFn } from '@angular/forms';
import { SimpleControlType } from '@shared/forms/components/simple-form-renderer/types';

export class SimpleFormControl<ControlName> {
  public constructor(
    public readonly name: ControlName,
    public readonly type: SimpleControlType,
    public readonly validators: ValidatorFn[],
    public readonly disabled?: boolean,
    public readonly value?: unknown,
    public readonly label?: string,
    public readonly placeholder?: string,
  ) {}

  public formControl(): FormControl {
    return new FormControl(this.value, this.validators);
  }
}
