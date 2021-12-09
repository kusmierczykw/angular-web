import { Component, OnInit } from '@angular/core';
import { DashboardSidebarMenuService } from '@layouts/dashboard/services/dashboard-sidebar-menu.service';
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
    private readonly sidebarMenuService: DashboardSidebarMenuService,
  ) {}

  public ngOnInit(): void {
    const builder: MenuItemBuilder = new MenuItemBuilder();

    this.sidebarMenuService.register([
      builder
        .setIcon(Icon.BUILDING)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.GYMS))
        .setTooltip('Siłownie')
        .build(),

      builder
        .setIcon(Icon.CREDIT_CARD)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.GYMS))
        .setTooltip('Karty lojalnościowe')
        .build(),
    ]);
  }
}
