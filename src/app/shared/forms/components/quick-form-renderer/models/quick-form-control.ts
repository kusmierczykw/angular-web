import { FormControl, ValidatorFn } from '@angular/forms';
import { QuickControlType } from '@shared/forms/components/quick-form-renderer/enums/quick-control.type';
import { QuickControlConfig } from '@shared/forms/components/quick-form-renderer/types/quick-control.config';

export class QuickFormControl<ControlName, Value = unknown> {
  private _formControl!: FormControl;

  public constructor(
    public readonly name: ControlName,
    public readonly type: QuickControlType,
    public readonly validators: ValidatorFn[],
    public readonly disabled?: boolean,
    public readonly value?: Value,
    public readonly label?: string,
    public readonly placeholder?: string,
    public readonly hint?: string,
    public readonly config?: QuickControlConfig,
  ) {
    this.configureControl();
  }

  public get formControl(): FormControl {
    return this._formControl;
  }

  private configureControl(): void {
    this._formControl = this.buildFormControl();
  }

  private buildFormControl(): FormControl {
    return new FormControl(this.value, this.validators);
  }
}
