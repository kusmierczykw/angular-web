import { Component } from '@angular/core';
import { Icon } from '@core/icons/enums';
import { map, Observable } from 'rxjs';
import { DashboardSidebarToggleService } from '@layouts/dashboard/services/dashboard-sidebar-toggle.service';

@Component({
  selector: 'app-dashboard-sidebar-toggle',
  templateUrl: './dashboard-sidebar-toggle.component.html',
  styleUrls: ['./dashboard-sidebar-toggle.component.scss'],
})
export class DashboardSidebarToggleComponent {
  public readonly Icon = Icon;
  public readonly expandLabel: string = 'Rozwiń';
  public readonly collapseLabel: string = 'Rozwiń';
  public readonly expandIcon: Icon = Icon.RECORD;
  public readonly collapseIcon: Icon = Icon.RECORD_PARTIALLY_FILL;
  public readonly toggle$: Observable<boolean>;
  public readonly label$: Observable<string>;
  public readonly icon$: Observable<Icon>;

  public constructor(
    private readonly sidebarToggleService: DashboardSidebarToggleService,
  ) {
    this.toggle$ = this.sidebarToggleService.toggle$;
    this.label$ = this.labelSource$;
    this.icon$ = this.iconSource$;
  }

  private get labelSource$(): Observable<string> {
    return this.toggle$.pipe(
      map((expanded: boolean) =>
        expanded ? this.collapseLabel : this.expandLabel,
      ),
    );
  }

  private get iconSource$(): Observable<Icon> {
    return this.toggle$.pipe(
      map((expanded: boolean) =>
        expanded ? this.collapseIcon : this.expandIcon,
      ),
    );
  }

  public handleToggleClick(): void {
    this.toggle();
  }

  private toggle(): void {
    this.sidebarToggleService.toggle();
  }
}
