import { Component, Input } from '@angular/core';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models';
import { FormGroup } from '@angular/forms';
import { QuickControlType } from '@shared/forms/components/quick-form-renderer/enums';

@Component({
  template: '',
})
export abstract class AbstractControlRendererComponent<ControlName> {
  @Input() public control!: QuickFormControl<ControlName>;
  @Input() public formGroupRef!: FormGroup;

  public readonly QuickControlType = QuickControlType;
}
