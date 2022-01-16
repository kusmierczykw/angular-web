import { Component } from '@angular/core';
import { RoutePath } from '@core/routing/paths';

@Component({
  selector: 'app-trainings-page',
  templateUrl: './trainings-page.component.html',
  styleUrls: ['./trainings-page.component.scss'],
})
export class TrainingsPageComponent {
  public readonly RoutePath = RoutePath;
  public readonly Text = {
    ADD: 'Dodaj trening',
  };
}
