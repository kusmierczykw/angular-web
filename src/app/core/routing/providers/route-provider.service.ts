import { Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';
import { RoutePath, RoutePathFragment } from '@core/routing/paths';

@Injectable({
  providedIn: 'root',
})
export class RouteProviderService {
  private readonly routes: Record<RoutePath, string[]> = {
    [RoutePath.SIGN_IN]: [RoutePathFragment.AUTH, RoutePathFragment.SIGN_IN],
  };

  public constructor(private readonly router: Router) {}

  public getRoute(path: RoutePath, params?: Params): string[] {
    let route: string[] = this.routes[path];

    if (params) {
      route = this.replaceRouteVariables(route, params);
    }

    return route;
  }

  private replaceRouteVariables(route: string[], params: Params): string[] {
    const paramsObject = this.paramsObject(params);

    return route.map((fragment: string) => paramsObject[fragment] ?? fragment);
  }

  private paramsObject(params: Params): { [key: string]: string } {
    const keys: string[] = Object.keys(params);

    return keys.reduce((object, key) => {
      const variable = this.routeVariable(key);

      return { ...object, [variable]: `${params[key]}` };
    }, {});
  }

  private routeVariable(key: string): string {
    return `{${key}}`;
  }
}
