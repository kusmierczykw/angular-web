import { Component } from '@angular/core';
import { Icon } from '@core/icons/enums';
import { DashboardSidebarMenuService } from '@layouts/dashboard/services';
import { Observable } from 'rxjs';
import { MenuItem } from '@shared/menu/models';
import { Image } from '@core/images/enums';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss'],
})
export class DashboardSidebarComponent {
  public readonly Icon = Icon;
  public readonly Image = Image;
  public readonly menu$: Observable<MenuItem[]>;
  public readonly sidebarToggle: boolean = false;

  public constructor(
    private readonly menuService: DashboardSidebarMenuService,
  ) {
    this.menu$ = this.menuService.menu$;
  }
}
