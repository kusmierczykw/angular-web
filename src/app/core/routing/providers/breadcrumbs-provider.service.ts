import { Injectable } from '@angular/core';
import { Breadcrumb } from '@core/routing/models/breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from '@core/routing/data/route-data';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsProviderService {
  public buildFromActivatedRoute(activatedRoute: ActivatedRoute): Breadcrumb[] {
    return this.createBreadcrumbs(activatedRoute);
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    routerLink: string[] = ['/'],
    breadcrumbs: Breadcrumb[] = [],
  ): Breadcrumb[] {
    const { children } = route;

    if (children.length === 0) {
      return breadcrumbs;
    }

    children.forEach((child: ActivatedRoute) => {
      const routeURL: string[] = child.snapshot.url.map(
        (segment) => segment.path,
      );

      if (routeURL.length > 0) {
        routerLink = [...routerLink, ...routeURL];
      }

      const label: string = child.snapshot.data[RouteData.BREADCRUMB] as string;

      if (label) {
        breadcrumbs.push({ label, routerLink });
      }

      return this.createBreadcrumbs(child, routerLink, breadcrumbs);
    });

    return breadcrumbs;
  }
}
