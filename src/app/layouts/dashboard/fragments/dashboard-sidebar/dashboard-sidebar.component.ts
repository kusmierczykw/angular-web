import { Component } from '@angular/core';
import { Icon } from '@core/icons/enums';
import { DashboardSidebarMenuService } from '@layouts/dashboard/services/dashboard-sidebar-menu.service';
import { Observable } from 'rxjs';
import { MenuItemModel } from '@shared/menu/models';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss'],
})
export class DashboardSidebarComponent {
  public readonly Icon = Icon;
  public readonly menu$: Observable<MenuItemModel[]>;

  public constructor(
    private readonly menuService: DashboardSidebarMenuService,
  ) {
    this.menu$ = this.menuService.menu$;
  }
}
