import { FormControl, FormGroup } from '@angular/forms';
import { TrainingModel } from '@features/training/models/training.model';
import { TrainingFormControl } from '@features/training/components/training-form/training-form.control';
import { SimpleFormBuilderService } from '@shared/forms/builders/simple-form-builder.service';

export class TrainingForm {
  public form: FormGroup;

  public constructor(
    private readonly builder: SimpleFormBuilderService<TrainingFormControl>,
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
    const name = this.model?.name;
    const startedAt = this.model?.startedAt;

    return this.builder
      .addControl(TrainingFormControl.NAME, (builder) =>
        builder.value(name).required().build(),
      )
      .addControl(TrainingFormControl.STARTED_AT, (builder) =>
        builder.value(startedAt).required().build(),
      )
      .build();
  }

  private getControlValue<T>(name: TrainingFormControl): T {
    return this.getControl(name).value as T;
  }

  private getControl(name: TrainingFormControl): FormControl {
    return this.form.get(name) as FormControl;
  }
}
