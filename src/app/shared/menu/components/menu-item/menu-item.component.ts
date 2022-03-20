import { Component, Input } from '@angular/core';
import { StyleClass } from '@core/types/style-class';
import { MenuItem } from '@shared/menu/models/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() public item!: MenuItem;
  @Input() public styleClass!: StyleClass;
  @Input() public activeClass: string = 'active';
}
