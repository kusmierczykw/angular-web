import { Component, Input } from '@angular/core';
import { MenuItemModel } from '@shared/menu/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() public menu!: MenuItemModel[];
}
