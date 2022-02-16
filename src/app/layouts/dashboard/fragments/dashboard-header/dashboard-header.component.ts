import { Component } from '@angular/core';
import { Icon } from '@core/icons/enums';
import { Observable } from 'rxjs';
import { DashboardHeaderMenuService } from '@layouts/dashboard/services';
import { MenuItem } from '@shared/menu/models';
import { TitleService } from '@features/title/services';
import { Title } from '@features/title/models';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  public readonly Icon = Icon;
  public readonly menu$: Observable<MenuItem[]>;
  public readonly title$: Observable<Title>;

  public constructor(
    private readonly menu: DashboardHeaderMenuService,
    private readonly title: TitleService,
  ) {
    this.menu$ = this.menu.menu$;
    this.title$ = this.title.title$;
  }
}
