import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TrainingModel } from '@features/training/models/training.model';
import { TrainingFormControl } from '@features/training/components/training-form/training-form.control';

export class TrainingForm {
  public form: FormGroup;

  public constructor(
    private readonly builder: FormBuilder,
    private readonly model?: TrainingModel,
  ) {
    this.form = this.build();
  }

  public toModel(): TrainingModel {
    const name: string = this.getControlValue(TrainingFormControl.NAME);
    const startedAt: Date = this.getControlValue(
      TrainingFormControl.STARTED_AT,
    );

    return new TrainingModel(name, startedAt);
  }

  private build(): FormGroup {
    return this.builder.group({
      [TrainingFormControl.NAME]: this.builder.control(this.model?.name),
    });
  }

  private getControlValue<T>(name: TrainingFormControl): T {
    return this.getControl(name).value as T;
  }

  private getControl(name: TrainingFormControl): FormControl {
    return this.form.get(name) as FormControl;
  }
}
