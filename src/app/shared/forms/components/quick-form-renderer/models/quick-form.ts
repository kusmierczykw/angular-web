import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Button } from '@shared/buttons/components/button/models/button';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models/quick-form-control';
import { Observable, startWith } from 'rxjs';
import { QuickFormModelMapper } from '@shared/forms/components/quick-form-renderer/interfaces/quick-form-model-mapper';
import { QuickControlName } from '@shared/forms/components/quick-form-renderer/types/quick-control.name';
import { Confirmation } from '@shared/confirmations/components/confirmation/models/confirmation';
import { AbstractControlStatus } from '@shared/forms/operators/abstract-control-status';

export class QuickForm<ControlName extends QuickControlName, Model> {
  private _formGroup!: FormGroup;

  public constructor(
    public readonly controls: QuickFormControl<ControlName>[],
    public readonly validators: ValidatorFn[],
    public readonly mapper: QuickFormModelMapper<Model>,
    public readonly submit: Button<Model>,
    public readonly cancel?: Button,
    public readonly cancellationConfirmation?: Confirmation,
  ) {
    this.configureForm();
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public get isValid$(): Observable<boolean> {
    const { isValid } = AbstractControlStatus;

    return this._formGroup.statusChanges.pipe(
      startWith(this._formGroup.status),
      isValid(),
    );
  }

  public get isInvalid$(): Observable<boolean> {
    const { isInvalid } = AbstractControlStatus;

    return this._formGroup.statusChanges.pipe(
      startWith(this._formGroup.status),
      isInvalid(),
    );
  }

  private configureForm(): void {
    this._formGroup = this.buildFormGroup();
  }

  private buildFormGroup(): FormGroup {
    const controls: { [key: QuickControlName]: FormControl } =
      this.controls.reduce(
        (controls: {}, control: QuickFormControl<ControlName>) => ({
          ...controls,
          ...{ [control.name]: control.formControl },
        }),
        {},
      );

    return new FormGroup(controls);
  }
}
