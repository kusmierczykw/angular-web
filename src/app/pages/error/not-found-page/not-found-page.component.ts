import { Component } from '@angular/core';
import { Image } from '@core/images/enums/image';
import { RouterLink } from '@core/routing/types/router-link';
import { RouteProviderService } from '@core/routing/providers/route-provider.service';
import { RoutePath } from '@core/routing/paths/route-path';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
})
export class NotFoundPageComponent {
  public readonly NOT_FOUND_IMAGE = Image.UNDRAW_TAKEN;
  public readonly ROOT_PATH: RouterLink;

  public constructor(private readonly routeProvider: RouteProviderService) {
    this.ROOT_PATH = this.routeProvider.getRoute(RoutePath.ROOT);
  }
}
