import { RouterLink } from '@core/routing/types/router-link';
import { Icon } from '@core/icons/enums';
import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';

export class MenuItemModel {
  public readonly routerLink?: RouterLink;
  public readonly label?: string;
  public readonly icon?: Icon;
  public readonly command?: () => void;
  public readonly tooltip?: string;

  public constructor(builder: MenuItemBuilder) {
    this.label = builder.label;
    this.routerLink = builder.routerLink;
    this.icon = builder.icon;
    this.command = builder.command;
    this.tooltip = builder.tooltip;
  }
}
