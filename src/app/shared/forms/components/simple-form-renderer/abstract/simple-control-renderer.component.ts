import { Component, Input } from '@angular/core';
import { SimpleFormControl } from '@shared/forms/components/simple-form-renderer/models';
import { FormGroup } from '@angular/forms';
import { SimpleControlType } from '@shared/forms/components/simple-form-renderer/types';

@Component({
  selector: 'app-abstract-simple-control-renderer',
  template: '',
})
export abstract class SimpleControlRendererComponent<ControlName> {
  @Input() public control!: SimpleFormControl<ControlName>;
  @Input() public formGroupRef!: FormGroup;

  public readonly SimpleControlType = SimpleControlType;
}
