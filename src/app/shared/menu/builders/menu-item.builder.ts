import { RouterLink } from '@core/routing/types/router-link';
import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { isObservable, Observable, of } from 'rxjs';
import { Icon } from '@shared/icons/enums/icon';
import { RouterLinkActiveOptions } from '@shared/menu/types/router-link-active.options';
import { MenuItem } from '@shared/menu/models/menu-item';
import { RequiredParameterException } from '@core/exceptions/required-parameter.exception';

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

  public icon(icon: Icon): this {
    this._icon = icon;

    return this;
  }

  public tooltip(tooltip: string): this {
    this._tooltip = tooltip;

    return this;
  }

  public ripple(ripple: boolean): this {
    this._ripple = ripple;

    return this;
  }

  public label(label: string): this {
    this._label = label;

    return this;
  }

  public command(command: () => void): this {
    this._command = command;

    return this;
  }

  public routerLink(routerLink: RouterLink): this {
    this._routerLink = routerLink;

    return this;
  }

  public routerLinkActiveOptions(options: RouterLinkActiveOptions): this {
    this._routerLinkActiveOptions = options;

    return this;
  }

  public theme(theme: ThemePalette): this {
    this._theme = theme;

    return this;
  }

  public visibility(factory: () => Observable<boolean> | boolean): this {
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
    this.validate();

    const item = new MenuItem(
      this._theme,
      this._visibility,
      this._routerLinkActiveOptions,
      this._routerLink,
      this._label,
      this._icon,
      this._command,
      this._tooltip,
      this._ripple,
    );

    this.reset();

    return item;
  }

  private validate(): void {
    if (!this._label && !this._icon) {
      throw new RequiredParameterException('label or icon');
    }

    if (!this._routerLink && !this._command) {
      throw new RequiredParameterException('router link or command');
    }
  }
}
