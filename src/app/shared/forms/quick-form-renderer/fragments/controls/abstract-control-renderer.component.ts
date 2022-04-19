import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { QuickFormControl } from '@shared/forms/quick-form-renderer/models/quick-form-control';
import { QuickControlType } from '../../enums/quick-control.type';
import { Nullish } from '@utils/types/nullish';

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

  public get label(): Nullish<string> {
    return this.control.label;
  }

  public get hint(): Nullish<string> {
    return this.control.hint;
  }

  public get errors(): Nullish<ValidationErrors> {
    return this.formControl.errors;
  }
}
