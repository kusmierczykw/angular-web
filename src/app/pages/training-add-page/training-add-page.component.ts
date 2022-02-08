import { Component } from '@angular/core';
import { Training } from '@features/training/models/training';

@Component({
  selector: 'app-training-add-page',
  templateUrl: './training-add-page.component.html',
  styleUrls: ['./training-add-page.component.scss'],
})
export class TrainingAddPageComponent {
  public handleSubmitClick(model: Training): void {
    console.log(model);
  }

  public handleCancelClick(): void {}
}
