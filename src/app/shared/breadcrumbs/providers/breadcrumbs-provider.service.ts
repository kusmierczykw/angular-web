import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '@shared/breadcrumbs/models/breadcrumb';
import { RouterLink } from '@core/routing/types/router-link';
import { ActivatedRouteHelperService } from '@core/routing/helpers/activated-route-helper.service';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsProviderService {
  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly activatedRouteHelper: ActivatedRouteHelperService,
  ) {
  }

  public buildFromActivatedRoute(
    activatedRoute: ActivatedRoute = this.activatedRoute,
  ): Breadcrumb[] {
    return this.createBreadcrumbs(activatedRoute);
  }

  private createBreadcrumbs(
    activatedRoute: ActivatedRoute,
    routerLink: RouterLink = ['/'],
    breadcrumbs: Breadcrumb[] = [],
  ): Breadcrumb[] {
    const { children } = activatedRoute;

    if (children.length === 0) {
      return breadcrumbs;
    }

    children.forEach((child: ActivatedRoute) => {
      const snapshot = child.snapshot;
      const fragment = snapshot.url.map((segment) => segment.path);

      if (fragment.length > 0) {
        routerLink = [...routerLink, ...fragment];
      }

      const label = this.activatedRouteHelper.breadcrumbFromSnapshot(snapshot);

      if (label) {
        breadcrumbs.push({ label, routerLink });
      }

      return this.createBreadcrumbs(child, routerLink, breadcrumbs);
    });

    return breadcrumbs;
  }
}
