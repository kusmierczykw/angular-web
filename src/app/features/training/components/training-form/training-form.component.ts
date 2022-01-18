import { Component, OnInit } from '@angular/core';
import { TrainingForm } from '@features/training/components/training-form/training-form';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss'],
})
export class TrainingFormComponent implements OnInit {
  public formModel!: TrainingForm;

  public constructor(private readonly formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.configureFormModel();
  }

  private configureFormModel(): void {
    this.formModel = new TrainingForm(this.formBuilder);
  }
}
