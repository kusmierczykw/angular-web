import { Component, OnInit } from '@angular/core';
import { TrainingFormControl } from '@features/training/components/training-form/training-form.control';
import { FormBuilder } from '@angular/forms';
import { QuickForm } from '@shared/forms/components/quick-form-renderer/models/quick-form';
import { QuickFormBuilder } from '@shared/forms/components/quick-form-renderer/builders';
import { TrainingModel } from '@features/training/models/training.model';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss'],
})
export class TrainingFormComponent implements OnInit {
  public form!: QuickForm<TrainingFormControl, TrainingModel>;

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly simpleFormBuilder: QuickFormBuilder<
      TrainingFormControl,
      TrainingModel
    >,
  ) {}

  public ngOnInit(): void {
    this.configureForm();
  }

  private configureForm(): void {
    this.form = this.simpleFormBuilder
      .control((builder) =>
        builder
          .initText(TrainingFormControl.NAME)
          .label('Nazwa')
          .required()
          .build(),
      )
      .control((builder) =>
        builder
          .initDate(TrainingFormControl.STARTED_AT)
          .label('Data rozpoczęcia')
          .required()
          .build(),
      )
      .cancel((builder) => builder.command(() => {}).build())
      .submit((builder) =>
        builder
          .command((model) => {
            console.log(model);
          })
          .build(),
      )
      .mapper(() => ({
        map: () => new TrainingModel('test', new Date()),
      }))
      .build();
  }
}
