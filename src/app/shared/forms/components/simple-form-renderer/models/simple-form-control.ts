import { FormControl, ValidatorFn } from '@angular/forms';
import {
  SimpleControlNameType,
  SimpleControlType,
} from '@shared/forms/components/simple-form-renderer/types';

export class SimpleFormControl<ControlName extends SimpleControlNameType> {
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
    return new FormControl(
      {
        value: this.value,
        disabled: this.disabled,
      },
      this.validators,
    );
  }
}
