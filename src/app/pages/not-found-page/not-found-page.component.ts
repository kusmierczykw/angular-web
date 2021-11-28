import { Component } from '@angular/core';
import { Image } from '@core/images/enums';
import { RouteProviderService } from '@core/routing/providers';
import { RouterLink } from '@core/routing/types/router-link';
import { RoutePath } from '@core/routing/paths';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent {
  public readonly NOT_FOUND_IMAGE: Image = Image.UNDRAW_NOT_FOUND;
  public readonly ROOT_PATH: RouterLink;

  public constructor(private readonly routeProvider: RouteProviderService) {
    this.ROOT_PATH = this.routeProvider.getRoute(RoutePath.ROOT);
  }
}
