import { RouterLink } from '@core/routing/types/router-link';
import { Icon } from '@core/icons/enums';
import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { Observable } from 'rxjs';

type VisibilitySource = (() => boolean) | Observable<boolean>;

export class MenuItem {
  public readonly routerLink?: RouterLink;
  public readonly label?: string;
  public readonly icon?: Icon;
  public readonly command?: () => void;
  public readonly tooltip?: string;
  public readonly ripple?: boolean;
  public readonly theme: ThemePalette;
  public readonly visibility: VisibilitySource;

  public constructor(builder: MenuItemBuilder) {
    this.label = builder.label;
    this.routerLink = builder.routerLink;
    this.icon = builder.icon;
    this.tooltip = builder.tooltip;
    this.ripple = builder.ripple;
    this.theme = builder.theme;
    this.command = builder.command;
    this.visibility = builder.visibility as VisibilitySource;
  }
}
