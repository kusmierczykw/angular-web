import { Component, Input } from '@angular/core';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { QuickControlType } from '@shared/forms/components/quick-form-renderer/enums';

@Component({
  template: '',
})
export abstract class AbstractControlRendererComponent<ControlName> {
  @Input() public control!: QuickFormControl<ControlName>;
  @Input() public formGroupRef!: FormGroup;

  public readonly QuickControlType = QuickControlType;

  public get formControl(): FormControl {
    return this.control.formControl;
  }

  public get label(): string | undefined {
    return this.control.label;
  }

  public get hint(): string | undefined {
    return this.control.hint;
  }

  public get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }
}
