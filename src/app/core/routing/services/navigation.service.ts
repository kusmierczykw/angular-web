import { Injectable } from '@angular/core';
import { NavigationExtras, Params, Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { RouteProviderService } from '@core/routing/providers/route-provider.service';
import { RoutePath } from '@core/routing/paths/route-path';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  public constructor(
    private readonly routeProvider: RouteProviderService,
    private readonly router: Router,
  ) {}

  public navigate(
    path: RoutePath,
    params?: Params,
    navigationExtras?: NavigationExtras,
  ): void {
    const route = this.routeProvider.getRoute(path, params);

    void this.router.navigate(route, navigationExtras);
  }

  public navigate$(
    path: RoutePath,
    params?: Params,
    navigationExtras?: NavigationExtras,
  ): Observable<boolean> {
    const route = this.routeProvider.getRoute(path, params);

    return from(this.router.navigate(route, navigationExtras));
  }
}
