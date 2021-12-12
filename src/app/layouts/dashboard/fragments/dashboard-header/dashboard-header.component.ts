import { Component } from '@angular/core';
import { Icon } from '@core/icons/enums';
import { MenuItemModel } from '@shared/menu/models';
import { Observable } from 'rxjs';
import { DashboardHeaderMenuService } from '@layouts/dashboard/services/dashboard-header-menu.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  public readonly Icon = Icon;

  public menu$: Observable<MenuItemModel[]>;

  public constructor(private readonly menuService: DashboardHeaderMenuService) {
    this.menu$ = this.menuService.menu$;
  }
}
