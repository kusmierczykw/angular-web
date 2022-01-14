import { MenuItem } from '@shared/menu/models';
import { RouterLink } from '@core/routing/types/router-link';
import { Icon } from '@core/icons/enums';
import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { RequiredParameterException } from '@core/exceptions/required-parameter.exception';
import { isObservable, Observable, of } from 'rxjs';
import { RouterLinkActiveOptions } from '@shared/menu/types/router-link-active.options';

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
  public visibility!: Observable<boolean>;
  public routerLinkActiveOptions!: RouterLinkActiveOptions;

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

  public setRouterLinkActiveOptions(options: RouterLinkActiveOptions): this {
    this.routerLinkActiveOptions = options;

    return this;
  }

  public setTheme(theme: ThemePalette): this {
    this.theme = theme;

    return this;
  }

  public setVisibility(factory: () => Observable<boolean> | boolean): this {
    const visibility = factory();

    this.visibility = isObservable(visibility) ? visibility : of(visibility);

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
    this.visibility = of(true);
    this.routerLinkActiveOptions = { exact: false };

    return this;
  }

  public build(): MenuItem {
    if (!this.label && !this.icon) {
      throw new RequiredParameterException('label or icon');
    }

    if (!this.routerLink && !this.command) {
      throw new RequiredParameterException('router link or command');
    }

    const item: MenuItem = new MenuItem(this);

    this.reset();

    return item;
  }
}
