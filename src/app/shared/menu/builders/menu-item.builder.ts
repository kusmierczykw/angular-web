import { MenuItem } from '@shared/menu/models';
import { RouterLink } from '@core/routing/types/router-link';
import { Icon } from '@core/icons/enums';
import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { RequiredParameterException } from '@core/exceptions/required-parameter.exception';
import { Observable } from 'rxjs';

type VisibilitySource = (() => boolean) | Observable<boolean>;

@Injectable({
  providedIn: 'root',
})
export class MenuItemBuilder {
  public routerLink?: RouterLink;
  public label?: string;
  public icon?: Icon;
  public command?: () => void;
  public tooltip?: string;
  public ripple?: boolean;
  public theme: ThemePalette;
  public visibility?: VisibilitySource;

  public constructor() {
    this.reset();
  }

  public setIcon(icon: Icon): this {
    this.icon = icon;

    return this;
  }

  public setTooltip(tooltip: string): this {
    this.tooltip = tooltip;

    return this;
  }

  public setRipple(ripple: boolean): this {
    this.ripple = ripple;

    return this;
  }

  public setLabel(label: string): this {
    this.label = label;

    return this;
  }

  public setCommand(command: () => void): this {
    this.command = command;

    return this;
  }

  public setRouterLink(routerLink: string[]): this {
    this.routerLink = routerLink;

    return this;
  }

  public setTheme(theme: ThemePalette): this {
    this.theme = theme;

    return this;
  }

  public setVisibility(visibility: VisibilitySource): this {
    this.visibility = visibility;

    return this;
  }

  public reset(): this {
    this.routerLink = undefined;
    this.label = undefined;
    this.icon = undefined;
    this.command = undefined;
    this.tooltip = undefined;
    this.ripple = true;
    this.theme = 'primary';
    this.visibility = () => true;

    return this;
  }

  public build(): MenuItem {
    if (!this.label && !this.icon) {
      throw new RequiredParameterException('label or icon');
    }

    if (!this.routerLink && !this.command) {
      throw new RequiredParameterException('link');
    }

    const item: MenuItem = new MenuItem(this);

    this.reset();

    return item;
  }
}
