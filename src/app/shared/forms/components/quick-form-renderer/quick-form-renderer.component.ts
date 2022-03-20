import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuickForm } from '@shared/forms/components/quick-form-renderer/models/quick-form';
import { FormGroup } from '@angular/forms';
import { filter, merge, Observable } from 'rxjs';
import { ConfirmationService } from '@shared/confirmations/components/confirmation/services/confirmation.service';
import { QuickControlName } from '@shared/forms/components/quick-form-renderer/types/quick-control.name';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models/quick-form-control';
import { Button } from '@shared/buttons/components/button/models/button';
import { Confirmation } from '@shared/confirmations/components/confirmation/models/confirmation';
import { QuickFormModelMapper } from '@shared/forms/components/quick-form-renderer/interfaces/quick-form-model-mapper';
import { once } from '@utils/rxjs/operators/once';
import { ConfirmationResult } from '@shared/confirmations/components/confirmation/enum/confirmation.result';

@Component({
  selector: 'app-quick-form-renderer',
  templateUrl: './quick-form-renderer.component.html',
  styleUrls: ['./quick-form-renderer.component.scss'],
  providers: [ConfirmationService],
})
export class QuickFormRendererComponent<
  ControlName extends QuickControlName,
  Model,
> implements OnChanges
{
  @Input() public form!: QuickForm<ControlName, Model>;

  public formGroup!: FormGroup;
  public controls!: QuickFormControl<ControlName>[];
  public submit!: Button<Model>;
  public cancel?: Button;
  public cancellationConfirmation?: Confirmation;
  public submitDisability$!: Observable<boolean>;

  private mapper!: QuickFormModelMapper<Model>;

  public constructor(private readonly confirmation: ConfirmationService) {}

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
    if (this.cancellationConfirmation) {
      this.confirmAndCancelCommandExecute();

      return;
    }

    this.cancelCommandExecute();
  }

  private confirmAndCancelCommandExecute(): void {
    this.confirmation
      .show(() => this.cancellationConfirmation!)
      .pipe(
        once(),
        filter((result) => result === ConfirmationResult.ACCEPT),
      )
      .subscribe(() => this.cancelCommandExecute());
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
    const { cancel, cancellationConfirmation } = this.form;

    this.cancel = cancel;
    this.cancellationConfirmation = cancellationConfirmation;
  }

  private configureModelMapper(): void {
    const { mapper } = this.form;

    this.mapper = mapper;
  }

  private cancelCommandExecute(): void {
    this.cancel?.command.execute();
  }
}
