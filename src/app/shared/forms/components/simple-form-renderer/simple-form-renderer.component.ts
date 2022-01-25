import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SimpleForm } from '@shared/forms/components/simple-form-renderer/models/simple-form';
import { FormGroup } from '@angular/forms';
import { ActionButton } from '@shared/buttons/components/action-button/models/action-button';
import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';
import { SimpleFormControl } from '@shared/forms/components/simple-form-renderer/models';

@Component({
  selector: 'app-simple-form-renderer',
  templateUrl: './simple-form-renderer.component.html',
  styleUrls: ['./simple-form-renderer.component.scss'],
})
export class SimpleFormRendererComponent<
  ControlName extends SimpleControlNameType,
> implements OnChanges
{
  @Input() public form!: SimpleForm<ControlName>;

  public formGroup!: FormGroup;
  public controls!: SimpleFormControl<ControlName>[];
  public submit?: ActionButton;
  public cancel?: ActionButton;

  public ngOnChanges(changes: SimpleChanges) {
    const { form } = changes;

    if (form) {
      this.configureForm();
    }
  }

  private configureForm(): void {
    const { controls, formGroup, submit, cancel } = this.form;

    this.formGroup = formGroup.call(this.form);
    this.controls = controls;
    this.submit = submit;
    this.cancel = cancel;
  }
}
