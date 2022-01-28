import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ActionButton } from '@shared/buttons/components/action-button/models/action-button';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models/quick-form-control';
import { QuickControlNameType } from '@shared/forms/components/quick-form-renderer/types';
import { Observable, startWith } from 'rxjs';
import { abstractControlStatus, isInvalid } from '@shared/forms/operators';

export class QuickForm<ControlName extends QuickControlNameType, Model> {
  private _formGroup!: FormGroup;

  public constructor(
    public readonly controls: QuickFormControl<ControlName>[],
    public readonly validators: ValidatorFn[],
    public readonly submit: ActionButton<Model>,
    public readonly cancel: ActionButton,
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
    const controls: { [key: QuickControlNameType]: FormControl } =
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
