import { Injectable } from '@angular/core';
import { Breadcrumb } from '@shared/breadcrumbs/models';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '@core/routing/data/route-data';
import { RouterLink } from '@core/routing/types';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsProviderService {
  public constructor(private readonly activatedRoute: ActivatedRoute) {}

  public buildFromActivatedRoute(
    activatedRoute: ActivatedRoute = this.activatedRoute,
  ): Breadcrumb[] {
    return this.createBreadcrumbs(activatedRoute);
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    routerLink: RouterLink = ['/'],
    breadcrumbs: Breadcrumb[] = [],
  ): Breadcrumb[] {
    const { children } = route;

    if (children.length === 0) {
      return breadcrumbs;
    }

    children.forEach((child: ActivatedRoute) => {
      const snapshot = child.snapshot;
      const routeURL: string[] = snapshot.url.map((segment) => segment.path);

      if (routeURL.length > 0) {
        routerLink = [...routerLink, ...routeURL];
      }

      const label: string = snapshot.data[RouteData.BREADCRUMB] as string;

      if (label) {
        breadcrumbs.push({ label, routerLink });
      }

      return this.createBreadcrumbs(child, routerLink, breadcrumbs);
    });

    return breadcrumbs;
  }
}
