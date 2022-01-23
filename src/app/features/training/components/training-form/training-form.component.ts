import { Component, OnInit } from '@angular/core';
import { TrainingFormControl } from '@features/training/components/training-form/training-form.control';
import { FormBuilder } from '@angular/forms';
import { SimpleFormBuilder } from '@shared/forms/components';
import { SimpleForm } from '@shared/forms/components/simple-form-renderer/models/simple-form';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss'],
})
export class TrainingFormComponent implements OnInit {
  public form!: SimpleForm<TrainingFormControl>;

  public constructor(
    private readonly formBuilder: FormBuilder,
    private readonly simpleFormBuilder: SimpleFormBuilder<TrainingFormControl>,
  ) {}

  public ngOnInit(): void {
    this.configureForm();
  }

  private configureForm(): void {
    this.form = this.simpleFormBuilder
      .addControl((builder) =>
        builder
          .initText(TrainingFormControl.NAME)
          .label('Nazwa')
          .required()
          .build(),
      )
      .addControl((builder) =>
        builder
          .initDate(TrainingFormControl.STARTED_AT)
          .label('Data rozpoczęcia')
          .required()
          .build(),
      )
      .cancel((builder) => builder.command(() => {}).build())
      .submit((builder) => builder.command(() => {}).build())
      .build();
  }
}
