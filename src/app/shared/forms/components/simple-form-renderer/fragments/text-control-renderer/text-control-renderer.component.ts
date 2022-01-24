import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';
import { SimpleFormControl } from '@shared/forms/components/simple-form-renderer/models';

@Component({
  selector: 'app-text-control-renderer',
  templateUrl: './text-control-renderer.component.html',
  styleUrls: [ './text-control-renderer.component.scss' ],
})
export class TextControlRendererComponent<ControlName extends SimpleControlNameType,
  > {
  @Input() public control!: SimpleFormControl<ControlName>;
  @Input() public formGroupRef!: FormGroup;
}
