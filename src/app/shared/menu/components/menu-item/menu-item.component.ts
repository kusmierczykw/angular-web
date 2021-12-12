import { Component, Input } from '@angular/core';
import { MenuItemModel } from '@shared/menu/models';
import { StyleClass } from '@core/types/style-class';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() public item!: MenuItemModel;
  @Input() public styleClass!: StyleClass;
}
