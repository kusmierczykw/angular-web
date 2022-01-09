import { Component } from '@angular/core';
import { Icon } from '@core/icons/enums';
import { MenuItem } from '@shared/menu/models';
import { Observable } from 'rxjs';
import { DashboardHeaderMenuService } from '@layouts/dashboard/services';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  public readonly Icon = Icon;

  public menu$: Observable<MenuItem[]>;

  public constructor(private readonly menuService: DashboardHeaderMenuService) {
    this.menu$ = this.menuService.menu$;
  }
}
