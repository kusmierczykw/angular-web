import { QuickFormModelMapper } from '@shared/forms/components/quick-form-renderer/interfaces';
import { Training } from '@features/training/models/training';
import { FormGroup } from '@angular/forms';
import { TrainingFormControl } from '@features/training/components/training-form/training-form.control';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrainingFormModelMapper implements QuickFormModelMapper<Training> {
  public map(form: FormGroup): Training {
    const { NAME, FISHED_AT, STARTED_AT, GROUP, QUANTITY } =
      TrainingFormControl;
    const { controls } = form;
    const {
      [NAME]: { value: name },
      [STARTED_AT]: { value: startedAt },
      [FISHED_AT]: { value: finishedAt },
      [QUANTITY]: { value: quantity },
      [GROUP]: { value: group },
    } = controls;

    return new Training(name, startedAt, finishedAt, quantity, group);
  }
}
