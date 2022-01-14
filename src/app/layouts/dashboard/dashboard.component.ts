import { Component, OnInit } from '@angular/core';
import {
  DashboardHeaderMenuService,
  DashboardSidebarMenuService,
} from '@layouts/dashboard/services';
import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';
import { RouteProviderService } from '@core/routing/providers';
import { TitleService } from '@features/title/services';
import { Title } from '@features/title/models';
import { RoutePath } from '@core/routing/paths';
import { Icon } from '@core/icons/enums';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TitleService],
})
export class DashboardComponent implements OnInit {
  public constructor(
    private readonly routeProvider: RouteProviderService,
    private readonly menuBuilder: MenuItemBuilder,
    private readonly sidebarMenuService: DashboardSidebarMenuService,
    private readonly headerMenuService: DashboardHeaderMenuService,
    private readonly titleService: TitleService,
  ) {}

  public ngOnInit(): void {
    this.registerHeaderMenu();
    this.registerSidebarMenu();
    this.registerTitle();
  }

  private registerHeaderMenu(): void {
    this.headerMenuService.register([
      this.menuBuilder.setLabel('Wskazówki').setRouterLink([]).build(),
      this.menuBuilder.setLabel('Pomoc').setRouterLink([]).build(),
      this.menuBuilder.setLabel('Zgłoś błąd').setRouterLink([]).build(),
    ]);
  }

  private registerSidebarMenu(): void {
    this.sidebarMenuService.register([
      this.menuBuilder
        .setLabel('Dashboard')
        .setIcon(Icon.DASHBOARD)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.DASHBOARD))
        .setRouterLinkActiveOptions({ exact: true })
        .build(),

      this.menuBuilder
        .setLabel('Treningi')
        .setIcon(Icon.ACTIVITY)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.TRAININGS))
        .build(),

      this.menuBuilder
        .setLabel('Konfiguracja')
        .setIcon(Icon.GEAR_WIDE_CONNECTED)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.SETTINGS))
        .build(),

      this.menuBuilder
        .setLabel('Guidebook')
        .setIcon(Icon.BOOK_HALF)
        .setRouterLink(this.routeProvider.getRoute(RoutePath.GUIDEBOOK))
        .build(),
    ]);
  }

  private registerTitle(): void {
    this.titleService.setTitle(new Title('Miłego dnia, Wojciech!'));
  }
}
