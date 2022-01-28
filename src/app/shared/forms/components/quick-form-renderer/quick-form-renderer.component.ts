import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuickForm } from '@shared/forms/components/quick-form-renderer/models/quick-form';
import { FormGroup } from '@angular/forms';
import { ActionButton } from '@shared/buttons/components/action-button/models';
import { QuickControlNameType } from '@shared/forms/components/quick-form-renderer/types';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models';
import { merge, Observable } from 'rxjs';
import { QuickFormModelMapper } from '@shared/forms/components/quick-form-renderer/interfaces';

@Component({
  selector: 'app-quick-form-renderer',
  templateUrl: './quick-form-renderer.component.html',
  styleUrls: ['./quick-form-renderer.component.scss'],
})
export class QuickFormRendererComponent<
  ControlName extends QuickControlNameType,
  Model,
> implements OnChanges
{
  @Input() public form!: QuickForm<ControlName, Model>;

  public formGroup!: FormGroup;
  public controls!: QuickFormControl<ControlName>[];
  public submit!: ActionButton<Model>;
  public cancel?: ActionButton;
  public submitDisability$!: Observable<boolean>;

  private mapper!: QuickFormModelMapper<Model>;

  public ngOnChanges(changes: SimpleChanges) {
    const { form } = changes;

    if (form) {
      this.configure();
    }
  }

  public handleSubmitClick(): void {
    const model = this.mapper.map(this.formGroup);

    this.submit.command.execute(model);
  }

  public handleCancelClick(): void {
    this.cancel?.command.execute();
  }

  private configure(): void {
    this.configureFormGroup();
    this.configureControls();
    this.configureSubmitAction();
    this.configureCancelAction();
    this.configureModelMapper();
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
    const disabilitySource = merge(submit.disabled$, isInvalid$);

    this.submit = submit;
    this.submitDisability$ = disabilitySource;
  }

  private configureCancelAction(): void {
    const { cancel } = this.form;

    this.cancel = cancel;
  }

  private configureModelMapper(): void {
    const { mapper } = this.form;

    this.mapper = mapper;
  }
}
