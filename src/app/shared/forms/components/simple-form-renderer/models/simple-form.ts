import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ActionButton } from '@shared/buttons/components/action-button/models/action-button';
import { SimpleFormControl } from '@shared/forms/components/simple-form-renderer/models/simple-form-control';
import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';

export class SimpleForm<ControlName extends SimpleControlNameType> {
  private _formGroup!: FormGroup;

  public constructor(
    public readonly controls: SimpleFormControl<ControlName>[],
    public readonly validators: ValidatorFn[],
    public readonly actions: ActionButton[],
  ) {
    this.configureForm();
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  private configureForm(): void {
    this._formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    const controls: { [key: SimpleControlNameType]: FormControl } =
      this.controls.reduce(
        (controls: {}, control: SimpleFormControl<ControlName>) => ({
          ...controls,
          ...{ [control.name]: control.formControl },
        }),
        {},
      );

    return new FormGroup(controls);
  }
}
