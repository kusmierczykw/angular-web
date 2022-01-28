import { Component, Input } from '@angular/core';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models';
import { FormGroup } from '@angular/forms';
import { SimpleControlType } from '@shared/forms/components/quick-form-renderer/types';

@Component({
  template: '',
})
export abstract class AbstractControlRendererComponent<ControlName> {
  @Input() public control!: QuickFormControl<ControlName>;
  @Input() public formGroupRef!: FormGroup;

  public readonly SimpleControlType = SimpleControlType;
}
