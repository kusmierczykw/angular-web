import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';
import { Injectable } from '@angular/core';
import { MenuItem } from '@shared/menu/models/menu-item';
import { RouteProviderService } from '@core/routing/providers/route-provider.service';
import { Icon } from '@shared/icons/enums/icon';
import { RoutePath } from '@core/routing/paths/route-path';

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
        .label('Pacjenci')
        .routerLink(this.routeProvider.getRoute(RoutePath.PATIENTS))
        .icon(Icon.PEOPLE_FILL)
        .build(),

      this.builder
        .label('Historia badań')
        .routerLink(this.routeProvider.getRoute(RoutePath.SETTINGS))
        .icon(Icon.ACTIVITY)
        .build(),
    ];
  }

  public getAccountMenu(): MenuItem[] {
    return [
      this.builder
        .label('Ustawienia')
        .icon(Icon.GEAR_WIDE_CONNECTED)
        .routerLink(this.routeProvider.getRoute(RoutePath.SETTINGS))
        .build(),

      this.builder
        .label('Guidebook')
        .icon(Icon.BOOK_HALF)
        .routerLink(this.routeProvider.getRoute(RoutePath.GUIDEBOOK))
        .visibility(() => false)
        .build(),

      this.builder
        .label('Wyloguj')
        .icon(Icon.BOX_ARROW_LEFT)
        .routerLink(this.routeProvider.getRoute(RoutePath.SIGN_OUT))
        .build(),
    ];
  }
}
