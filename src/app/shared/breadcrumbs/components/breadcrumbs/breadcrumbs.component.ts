import { Component, Input } from '@angular/core';
import { Icon } from '@core/icons/enums/icon';
import { Breadcrumb } from '@shared/breadcrumbs/models/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() public breadcrumbs!: Breadcrumb[];

  public readonly Icon = Icon;
}
