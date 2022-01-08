import { RouterLink } from '@core/routing/types/router-link';
import { Icon } from '@core/icons/enums';
import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';

export class MenuItemModel {
  public readonly routerLink?: RouterLink;
  public readonly label?: string;
  public readonly icon?: Icon;
  public readonly command?: () => void;
  public readonly tooltip?: string;
  public readonly ripple?: boolean;
  public readonly theme: ThemePalette;

  public constructor(builder: MenuItemBuilder) {
    this.label = builder.label;
    this.routerLink = builder.routerLink;
    this.icon = builder.icon;
    this.command = builder.command;
    this.tooltip = builder.tooltip;
    this.ripple = builder.ripple;
    this.theme = builder.theme;
  }
}
