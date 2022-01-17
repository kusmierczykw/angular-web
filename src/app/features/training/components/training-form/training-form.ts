import { FormBuilder, FormGroup } from '@angular/forms';
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
    const name: string = this.form.get(TrainingFormControl.NAME)?.value;

    return new TrainingModel(name);
  }

  private build(): FormGroup {
    return this.builder.group({
      [TrainingFormControl.NAME]: this.builder.control(this.model?.name),
    });
  }
}
