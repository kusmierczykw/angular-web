import { Component } from '@angular/core';
import { Image } from '@shared/images/enums/image';
import { RouterLink } from '@core/routing/types/router-link';
import { RouteProviderService } from '@core/routing/providers/route-provider.service';
import { RoutePath } from '@core/routing/paths/route-path';
import { ImagesModule } from '@shared/images/images.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  standalone: true,
  imports: [RouterModule, ImagesModule, MatGridListModule, MatButtonModule],
})
export class NotFoundPageComponent {
  public readonly NOT_FOUND_IMAGE = Image.UNDRAW_TAKEN;
  public readonly ROOT_PATH: RouterLink;

  public constructor(private readonly routeProvider: RouteProviderService) {
    this.ROOT_PATH = this.routeProvider.getRoute(RoutePath.ROOT);
  }
}
