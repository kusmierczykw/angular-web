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
    activatedRoute: ActivatedRoute,
    routerLink: string[] = ['/'],
    breadcrumbs: Breadcrumb[] = [],
  ): Breadcrumb[] {
    const children: ActivatedRoute[] = activatedRoute.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routerLinkSegment: string[] = child.snapshot.url.map(
        (segment) => segment.path,
      );

      if (routerLinkSegment.length > 0) {
        routerLink = [...routerLink, ...routerLinkSegment];
      }

      const label = child.snapshot.data[RouteData.BREADCRUMB];

      if (!label) {
        breadcrumbs.push(new Breadcrumb(label, routerLink));
      }

      this.createBreadcrumbs(child, routerLink, breadcrumbs);
    }

    return breadcrumbs;
  }
}
