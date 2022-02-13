import { Component } from '@angular/core';
import { Icon } from '@core/icons/enums';
import {
  DashboardSidebarMenuService,
  DashboardSidebarToggleService,
} from '@layouts/dashboard/services';
import { Observable } from 'rxjs';
import { Image } from '@core/images/enums';
import { MenuItem } from '@shared/menu/models';
import { negate } from '@utils/rxjs/operators';

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
  public readonly sidebarExpand$: Observable<boolean>;
  public readonly sidebarCollapse$: Observable<boolean>;

  public constructor(
    private readonly sidebarToggle: DashboardSidebarToggleService,
    private readonly sidebarMenu: DashboardSidebarMenuService,
  ) {
    this.menu$ = this.sidebarMenu.menu$;
    this.accountMenu$ = this.sidebarMenu.accountMenu$;
    this.sidebarExpand$ = this.sidebarToggle.toggle$;
    this.sidebarCollapse$ = this.sidebarToggle.toggle$.pipe(negate());
  }
}
