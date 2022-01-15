import { MenuItem } from '@shared/menu/models';
import { Icon } from '@core/icons/enums';
import { RoutePath } from '@core/routing/paths';
import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';
import { RouteProviderService } from '@core/routing/providers';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardSidebarMenuProviderService {
  public constructor(
    private readonly builder: MenuItemBuilder,
    private readonly routeProvider: RouteProviderService,
  ) {}

  public getMenu(): MenuItem[] {
    return [
      this.builder
        .setLabel('Dashboard')
        .setIcon(Icon.DASHBOARD)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.DASHBOARD))
        .setRouterLinkActiveOptions({ exact: true })
        .build(),

      this.builder
        .setLabel('Treningi')
        .setIcon(Icon.ACTIVITY)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.TRAININGS))
        .build(),

      this.builder
        .setLabel('Konfiguracja')
        .setIcon(Icon.GEAR_WIDE_CONNECTED)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.SETTINGS))
        .build(),

      this.builder
        .setLabel('Guidebook')
        .setIcon(Icon.BOOK_HALF)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.GUIDEBOOK))
        .build(),
    ];
  }
}
