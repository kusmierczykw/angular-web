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
  private _routerLink?: RouterLink;
  private _label?: string;
  private _icon?: Icon;
  private _command?: () => void;
  private _tooltip?: string;
  private _ripple?: boolean;
  private _theme!: ThemePalette;
  private _visibility!: Observable<boolean>;
  private _routerLinkActiveOptions!: RouterLinkActiveOptions;

  public constructor() {
    this.reset();
  }

  public get routerLink(): RouterLink | undefined {
    return this._routerLink;
  }

  public get label(): string | undefined {
    return this._label;
  }

  public get icon(): Icon | undefined {
    return this._icon;
  }

  public get command(): (() => void) | undefined {
    return this._command;
  }

  public get tooltip(): string | undefined {
    return this._tooltip;
  }

  public get ripple(): boolean | undefined {
    return this._ripple;
  }

  public get theme(): ThemePalette {
    return this._theme;
  }

  public get visibility(): Observable<boolean> {
    return this._visibility;
  }

  public get routerLinkActiveOptions(): RouterLinkActiveOptions {
    return this._routerLinkActiveOptions;
  }

  public setIcon(icon: Icon): this {
    this._icon = icon;

    return this;
  }

  public setTooltip(tooltip: string): this {
    this._tooltip = tooltip;

    return this;
  }

  public setRipple(ripple: boolean): this {
    this._ripple = ripple;

    return this;
  }

  public setLabel(label: string): this {
    this._label = label;

    return this;
  }

  public setCommand(command: () => void): this {
    this._command = command;

    return this;
  }

  public setRouterLink(routerLink: RouterLink): this {
    this._routerLink = routerLink;

    return this;
  }

  public setRouterLinkActiveOptions(options: RouterLinkActiveOptions): this {
    this._routerLinkActiveOptions = options;

    return this;
  }

  public setTheme(theme: ThemePalette): this {
    this._theme = theme;

    return this;
  }

  public setVisibility(factory: () => Observable<boolean> | boolean): this {
    const visibility = factory();

    this._visibility = isObservable(visibility) ? visibility : of(visibility);

    return this;
  }

  public reset(): this {
    this._routerLink = undefined;
    this._label = undefined;
    this._icon = undefined;
    this._command = undefined;
    this._tooltip = undefined;
    this._ripple = true;
    this._theme = 'primary';
    this._visibility = of(true);
    this._routerLinkActiveOptions = { exact: false };

    return this;
  }

  public build(): MenuItem {
    if (!this._label && !this._icon) {
      throw new RequiredParameterException('label or icon');
    }

    if (!this._routerLink && !this._command) {
      throw new RequiredParameterException('router link or command');
    }

    const item: MenuItem = new MenuItem(this);

    this.reset();

    return item;
  }
}
