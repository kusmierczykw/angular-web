import { Component } from '@angular/core';
import { Icon } from '@core/icons/enums';
import { DashboardSidebarMenuService } from '@layouts/dashboard/services';
import { Observable } from 'rxjs';
import { Image } from '@core/images/enums';
import { MenuItem } from '@shared/menu/models';

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss'],
})
export class DashboardSidebarComponent {
  public readonly Icon = Icon;
  public readonly Image = Image;
  public readonly menu$: Observable<MenuItem[]>;
  public readonly accountMenu$: Observable<MenuItem[]>;
  public readonly sidebarToggle: boolean = false;

  public constructor(
    private readonly menuService: DashboardSidebarMenuService,
  ) {
    this.menu$ = this.menuService.menu$;
    this.accountMenu$ = this.menuService.accountMenu$;
  }
}
