import { Component, Input } from '@angular/core';
import { Breadcrumb } from '@shared/breadcrumbs/models';
import { Icon } from '@core/icons/enums';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent {
  @Input() public breadcrumbs!: Breadcrumb[];

  public readonly Icon = Icon;
}
