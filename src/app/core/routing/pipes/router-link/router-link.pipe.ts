import { Pipe, PipeTransform } from '@angular/core';
import { Params } from '@angular/router';
import { RouteProviderService } from '@core/routing/providers/route-provider.service';
import { RouterLink } from '@core/routing/types/router-link';
import { RoutePath } from '@core/routing/paths/route-path';

@Pipe({
  name: 'routerLink',
})
export class RouterLinkPipe implements PipeTransform {
  public constructor(private readonly routeProvider: RouteProviderService) {}

  public transform(path: RoutePath, params?: Params): RouterLink {
    return this.routeProvider.getRoute(path, params);
  }
}
