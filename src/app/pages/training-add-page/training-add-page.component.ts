import { Component } from '@angular/core';
import { TrainingModel } from '@features/training/models/training.model';
import { NavigationService } from '@core/routing/services';
import { RoutePath } from '@core/routing/paths';

@Component({
  selector: 'app-training-add-page',
  templateUrl: './training-add-page.component.html',
  styleUrls: ['./training-add-page.component.scss'],
})
export class TrainingAddPageComponent {
  public constructor(private readonly navigateService: NavigationService) {}

  public handleSubmitClick(model: TrainingModel): void {
    console.log(model);
  }

  public handleCancelClick(): void {
    this.navigateService.navigate(RoutePath.TRAININGS);
  }
}
