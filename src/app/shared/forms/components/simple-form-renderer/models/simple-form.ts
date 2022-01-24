import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { SimpleFormButton } from '@shared/forms/components/simple-form-renderer/models/simple-form-button';
import { SimpleFormControl } from '@shared/forms/components/simple-form-renderer/models/simple-form-control';
import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';

export class SimpleForm<ControlName extends SimpleControlNameType> {
  public constructor(
    public readonly controls: SimpleFormControl<ControlName>[],
    public readonly validators: ValidatorFn[],
    public readonly submit?: SimpleFormButton,
    public readonly cancel?: SimpleFormButton,
  ) {
  }

  public formGroup(): FormGroup {
    const controls: { [key: SimpleControlNameType]: FormControl } =
      this.controls.reduce(
        (controls: {}, control: SimpleFormControl<ControlName>) => ({
          ...controls,
          ...{ [control.name]: control.formControl() },
        }),
        {},
      );

    return new FormGroup(controls);
  }
}