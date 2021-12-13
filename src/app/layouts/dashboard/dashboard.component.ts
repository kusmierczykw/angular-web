import { Component, OnInit } from '@angular/core';
import {
  DashboardHeaderMenuService,
  DashboardSidebarMenuService,
} from '@layouts/dashboard/services';
import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';
import { Icon } from '@core/icons/enums';
import { RouteProviderService } from '@core/routing/providers';
import { RoutePath } from '@core/routing/paths';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public constructor(
    private readonly routeProvider: RouteProviderService,
    private readonly menuBuilder: MenuItemBuilder,
    private readonly sidebarMenuService: DashboardSidebarMenuService,
    private readonly headerMenuService: DashboardHeaderMenuService,
  ) {}

  public ngOnInit(): void {
    this.registerHeaderMenu();
    this.registerSidebarMenu();
  }

  public registerHeaderMenu(): void {
    this.headerMenuService.register([
      this.menuBuilder //
        .setLabel('Wskazówki')
        .setRouterLink([])
        .build(),

      this.menuBuilder //
        .setLabel('Pomoc')
        .setRouterLink([])
        .build(),

      this.menuBuilder //
        .setLabel('Zgłoś błąd')
        .setRouterLink([])
        .build(),
    ]);
  }

  public registerSidebarMenu(): void {
    this.sidebarMenuService.register([
      this.menuBuilder
        .setIcon(Icon.BUILDING)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.GYMS))
        .setTooltip('Siłownie')
        .build(),

      this.menuBuilder
        .setIcon(Icon.USERS)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.EMPLOYEES))
        .setTooltip('Pracownicy')
        .build(),

      this.menuBuilder
        .setIcon(Icon.CREDIT_CARD)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.GYMS))
        .setTooltip('Karty lojalnościowe')
        .build(),

      this.menuBuilder
        .setIcon(Icon.GEAR_WIDE_CONNECTED)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.SETTINGS))
        .setTooltip('Konfiguracja')
        .build(),
    ]);
  }
}
