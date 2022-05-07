import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DashboardSidebarToggleService } from '@layouts/dashboard/services/dashboard-sidebar-toggle.service';
import { Icon } from '@shared/icons/enums/icon';

@Component({
  selector: 'app-dashboard-sidebar-toggle',
  templateUrl: './dashboard-sidebar-toggle.component.html',
  styleUrls: ['./dashboard-sidebar-toggle.component.scss'],
})
export class DashboardSidebarToggleComponent {
  public readonly Icon = Icon;
  public readonly expandLabel: string = 'Rozwiń';
  public readonly collapseLabel: string = 'Zwiń';
  public readonly expandIcon = Icon.LAYOUT_SIDEBAR;
  public readonly collapseIcon = Icon.LAYOUT_SIDEBAR_REVERSE;
  public readonly toggle$: Observable<boolean>;
  public readonly label$: Observable<string>;
  public readonly icon$: Observable<Icon>;

  public constructor(
    private readonly sidebarToggle: DashboardSidebarToggleService,
  ) {
    this.toggle$ = this.sidebarToggle.toggle$;
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
    this.sidebarToggle.toggle();
  }
}
