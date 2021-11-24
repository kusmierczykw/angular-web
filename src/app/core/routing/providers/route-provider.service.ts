import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { RoutePath, RoutePathFragment } from '@core/routing/paths';

@Injectable({
  providedIn: 'root',
})
export class RouteProviderService {
  private readonly routes: Record<RoutePath, string[]> = {
    [RoutePath.SIGN_IN]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.AUTH,
      RoutePathFragment.SIGN_IN,
    ],
    [RoutePath.DASHBOARD]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.DASHBOARD,
    ],
    [RoutePath.NOT_FOUND]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.NOT_FOUND,
    ],
  };

  public getRoute(path: RoutePath, params?: Params): string[] {
    let route = this.routes[path];

    if (params) {
      route = this.replaceRouteVariables(route, params);
    }

    return route;
  }

  private replaceRouteVariables(route: string[], params: Params): string[] {
    const keys = Object.keys(params);
    const values: { [key: string]: string } = keys.reduce((object, key) => {
      const variable = this.variable(key);

      return {
        ...object,
        ...{ [variable]: `${params[key]}` },
      };
    }, {});

    return route.map((fragment: string) => values[fragment] ?? fragment);
  }

  private variable(key: string): string {
    return `{${key}}`;
  }
}
