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
        .label('Dashboard')
        .icon(Icon.DASHBOARD)
        .routerLink(this.routeProvider.getRoute(RoutePath.DASHBOARD))
        .routerLinkActiveOptions({ exact: true })
        .build(),

      this.builder
        .label('Treningi')
        .icon(Icon.ACTIVITY)
        .routerLink(this.routeProvider.getRoute(RoutePath.TRAININGS))
        .build(),

      this.builder
        .label('Konfiguracja')
        .icon(Icon.GEAR_WIDE_CONNECTED)
        .routerLink(this.routeProvider.getRoute(RoutePath.SETTINGS))
        .build(),

      this.builder
        .label('Guidebook')
        .icon(Icon.BOOK_HALF)
        .routerLink(this.routeProvider.getRoute(RoutePath.GUIDEBOOK))
        .build(),
    ];
  }
}
