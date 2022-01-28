import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuickForm } from '@shared/forms/components/quick-form-renderer/models/quick-form';
import { FormGroup } from '@angular/forms';
import { ActionButton } from '@shared/buttons/components/action-button/models/action-button';
import { QuickControlNameType } from '@shared/forms/components/quick-form-renderer/types';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'app-quick-form-renderer',
  templateUrl: './quick-form-renderer.component.html',
  styleUrls: ['./quick-form-renderer.component.scss'],
})
export class QuickFormRendererComponent<
  ControlName extends QuickControlNameType,
> implements OnChanges
{
  @Input() public form!: QuickForm<ControlName>;

  public formGroup!: FormGroup;
  public controls!: QuickFormControl<ControlName>[];
  public submit!: ActionButton;
  public cancel!: ActionButton;
  public submitDisability$!: Observable<boolean>;

  public ngOnChanges(changes: SimpleChanges) {
    const { form } = changes;

    if (form) {
      this.configureForm();
    }
  }

  public handleSubmitClick(): void {
    this.submit.command();
  }

  public handleCancelClick(): void {
    this.cancel.command();
  }

  private configureForm(): void {
    this.configureFormGroup();
    this.configureControls();
    this.configureSubmitAction();
    this.configureCancelAction();
  }

  private configureFormGroup(): void {
    const { formGroup } = this.form;

    this.formGroup = formGroup;
  }

  private configureControls(): void {
    const { controls } = this.form;

    this.controls = controls;
  }

  private configureSubmitAction(): void {
    const { submit, isInvalid$ } = this.form;
    const submitDisabilitySource = merge(this.submit.disabled$, isInvalid$);

    this.submit = submit;
    this.submitDisability$ = submitDisabilitySource;
  }

  private configureCancelAction(): void {
    const { cancel } = this.form;

    this.cancel = cancel;
  }
}
