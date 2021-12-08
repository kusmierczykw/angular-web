import { Component, OnInit } from '@angular/core';
import { DashboardSidebarMenuService } from '@layouts/dashboard/services/dashboard-sidebar-menu.service';
import { MenuItemModel } from '@shared/menu/models';
import { Icon } from '@core/icons/enums';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public constructor(
    private readonly sidebarMenuService: DashboardSidebarMenuService,
  ) {}

  public ngOnInit(): void {
    this.sidebarMenuService.register([
      new MenuItemModel([], '', Icon.BUILDING),
      new MenuItemModel([], '', Icon.CREDIT_CARD),
    ]);
  }
}
