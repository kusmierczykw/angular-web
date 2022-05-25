import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models/quick-form-control';
import { QuickControlType } from '../../enums/quick-control.type';
import { Nil } from '@utils/types/nil';

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

  public get label(): Nil<string> {
    return this.control.label;
  }

  public get hint(): Nil<string> {
    return this.control.hint;
  }

  public get errors(): Nil<ValidationErrors> {
    return this.formControl.errors;
  }
}
