import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { ActionButton } from '@shared/buttons/components/action-button/models';
import { ActionButtonStyle } from '@shared/buttons/components/action-button/enums';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { HtmlButtonType } from '@shared/buttons/types/html-button.type';
import { ActionButtonCommand } from '@shared/buttons/components/action-button/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ActionButtonBuilder<CommandArgument = unknown> {
  private _label?: string;
  private _visibility$!: Observable<boolean>;
  private _disabled$!: Observable<boolean>;
  private _command?: ActionButtonCommand<CommandArgument>;
  private _style!: ActionButtonStyle;
  private _theme!: ThemePalette;
  private _htmlButtonType!: HtmlButtonType;

  public constructor() {
    this.reset();
  }

  public reset(): this {
    this._command = undefined;
    this._label = undefined;

    this.visibility(() => of(true));
    this.disabled(() => of(false));
    this.style(ActionButtonStyle.FLAT);
    this.theme('primary');
    this.htmlButtonType('button');

    return this;
  }

  public build(): ActionButton<CommandArgument> {
    this.validate();

    const button = new ActionButton<CommandArgument>(
      this._label!,
      this._visibility$,
      this._disabled$,
      this._command!,
      this._style,
      this._theme,
      this._htmlButtonType,
    );

    this.reset();

    return button;
  }

  public label(label: string): this {
    this._label = label;

    return this;
  }

  public visibility(factory: () => Observable<boolean>): this {
    this._visibility$ = factory();

    return this;
  }

  public disabled(factory: () => Observable<boolean>): this {
    this._disabled$ = factory();

    return this;
  }

  public command(command: ActionButtonCommand<CommandArgument>): this {
    this._command = command;

    return this;
  }

  public style(style: ActionButtonStyle): this {
    this._style = style;

    return this;
  }

  public theme(theme: ThemePalette): this {
    this._theme = theme;

    return this;
  }

  public htmlButtonType(type: HtmlButtonType): this {
    this._htmlButtonType = type;

    return this;
  }

  private validate(): void {
    this.validateCommand();
    this.validateLabel();
  }

  private validateCommand(): void {
    if (!this._command) {
      throw new RequiredMethodCallException('command');
    }
  }

  private validateLabel(): void {
    if (!this._label) {
      throw new RequiredMethodCallException('label');
    }
  }
}