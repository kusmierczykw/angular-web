import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { RoutePath, RoutePathFragment } from '@core/routing/paths';
import { RouterLink } from '@core/routing/types/router-link';

@Injectable({
  providedIn: 'root',
})
export class RouteProviderService {
  private readonly routes: Record<RoutePath, RouterLink> = {
    [RoutePath.DASHBOARD]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.DASHBOARD,
    ],
    [RoutePath.GUIDEBOOK]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.GUIDEBOOK,
    ],
    [RoutePath.NOT_FOUND]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.NOT_FOUND,
    ],
    [RoutePath.ROOT]: [RoutePathFragment.ROOT],
    [RoutePath.SETTINGS]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.DASHBOARD,
      RoutePathFragment.SETTINGS,
    ],
    [RoutePath.SIGN_IN]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.AUTH,
      RoutePathFragment.SIGN_IN,
    ],
    [RoutePath.TRAININGS]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.DASHBOARD,
      RoutePathFragment.TRAININGS,
    ],
    [RoutePath.TRAINING_ADD]: [
      RoutePathFragment.ROOT,
      RoutePathFragment.DASHBOARD,
      RoutePathFragment.TRAININGS,
      RoutePathFragment.ADD,
    ],
  };

  public getRoute(path: RoutePath, params?: Params): RouterLink {
    let route = this.routes[path];

    if (params) {
      route = this.replaceRouteVariables(route, params);
    }

    return route;
  }

  private replaceRouteVariables(route: string[], params: Params): RouterLink {
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
