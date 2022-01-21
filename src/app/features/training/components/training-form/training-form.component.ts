import { Component, OnInit } from '@angular/core';
import { TrainingForm } from '@features/training/components/training-form/training-form';
import { TrainingFormControl } from '@features/training/components/training-form/training-form.control';
import { SimpleFormBuilderService } from '@shared/forms/builders/simple-form-builder.service';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss'],
})
export class TrainingFormComponent implements OnInit {
  public readonly TrainingFormControl = TrainingFormControl;

  public formModel!: TrainingForm;

  public constructor(
    private readonly formBuilder: SimpleFormBuilderService<TrainingFormControl>,
  ) {}

  public ngOnInit(): void {
    this.configureFormModel();
  }

  private configureFormModel(): void {
    this.formModel = new TrainingForm(this.formBuilder);
  }
}
