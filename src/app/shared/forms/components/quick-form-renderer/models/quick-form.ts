import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Button } from '@shared/buttons/components/button/models/button';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models/quick-form-control';
import { QuickControlName } from '@shared/forms/components/quick-form-renderer/types';
import { Observable, startWith } from 'rxjs';
import { abstractControlStatus, isInvalid } from '@shared/forms/operators';
import { QuickFormModelMapper } from '@shared/forms/components/quick-form-renderer/interfaces/quick-form-model-mapper';
import { Confirmation } from '@shared/confirmations/components/confirmation/models';

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
    return this._formGroup.statusChanges.pipe(
      startWith(this._formGroup.status),
      abstractControlStatus(),
    );
  }

  public get isInvalid$(): Observable<boolean> {
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
