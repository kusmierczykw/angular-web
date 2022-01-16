import { Pipe, PipeTransform } from '@angular/core';
import { RoutePath } from '@core/routing/paths';
import { Params } from '@angular/router';
import { RouteProviderService } from '@core/routing/providers';
import { RouterLink } from '@core/routing/types';

@Pipe({
  name: 'routerLink',
})
export class RouterLinkPipe implements PipeTransform {
  public constructor(private readonly routeProvider: RouteProviderService) {}

  public transform(path: RoutePath, params?: Params): RouterLink {
    return this.routeProvider.getRoute(path, params);
  }
}
