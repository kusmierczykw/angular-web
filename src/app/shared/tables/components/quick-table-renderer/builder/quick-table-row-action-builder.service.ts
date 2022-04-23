import { Injectable } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';
import { Nullish } from '@utils/types/nullish';
import { Icon } from '@core/icons/enums/icon';
import { TableActionCommand } from '@shared/tables/components/quick-table-renderer/types/table-action-command';
import { isNullish } from '@utils/is-nullish';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { TableActionType } from '@shared/tables/components/quick-table-renderer/enums/table-action-type';
import { TableActionRouterLink } from '@shared/tables/components/quick-table-renderer/types/table-action-router-link';

@Injectable({
  providedIn: 'root',
})
export class QuickTableRowActionBuilderService<Key, Model> {
  private _key: Nullish<Key>;
  private _type: Nullish<TableActionType>;
  private _tooltip: Nullish<string>;
  private _icon: Nullish<Icon>;
  private _routerLinkFactory: Nullish<TableActionRouterLink<Model>>;
  private _commandFactory: Nullish<TableActionCommand<Model>>;
  private _visible!: boolean;

  public newInstance<Key, Model>() {
    return new QuickTableRowActionBuilderService<Key, Model>();
  }

  public init(key: Key): this {
    return this.key(key);
  }

  public initRouterLink(key: Key): this {
    return this.init(key).type(TableActionType.ROUTER_LINK);
  }

  public initCommand(key: Key): this {
    return this.init(key).type(TableActionType.COMMAND);
  }

  public type(type: TableActionType): this {
    this._type = type;

    return this;
  }

  public key(key: Key): this {
    this._key = key;

    return this;
  }

  public icon(icon: Icon): this {
    this._icon = icon;

    return this;
  }

  public visible(factory: () => boolean): this {
    this._visible = factory();

    return this;
  }

  public tooltip(tooltip: string): this {
    this._tooltip = tooltip;

    return this;
  }

  public command(factory: TableActionCommand<Model>): this {
    this._commandFactory = factory;

    return this;
  }

  public routerLink(factory: TableActionRouterLink<Model>): this {
    this._routerLinkFactory = factory;

    return this;
  }

  public reset(): this {
    this._key = undefined;
    this._type = undefined;
    this._icon = undefined;
    this._routerLinkFactory = undefined;
    this._tooltip = undefined;
    this._commandFactory = undefined;
    this._visible = true;

    return this;
  }

  public build(): TableAction<Key, Model> {
    this.validateKey();
    this.validateIcon();
    this.validateType();
    this.validateTooltip();
    this.validateRouterLinkFactory();
    this.validateCommandFactory();

    const action = new TableAction<Key, Model>(
      this._key as Key,
      this._type as TableActionType,
      this._icon as Icon,
      this._tooltip as string,
      this._routerLinkFactory,
      this._commandFactory,
      this._visible,
    );

    this.reset();

    return action;
  }

  private validateKey(): void {
    if (!isNullish(this._key)) {
      return;
    }

    throw new RequiredMethodCallException('key or init');
  }

  private validateIcon(): void {
    if (!isNullish(this._icon)) {
      return;
    }

    throw new RequiredMethodCallException('icon');
  }

  private validateType(): void {
    if (!isNullish(this._type)) {
      return;
    }

    throw new RequiredMethodCallException('type');
  }

  private validateTooltip(): void {
    if (!isNullish(this._tooltip)) {
      return;
    }

    throw new RequiredMethodCallException('tooltip');
  }

  private validateRouterLinkFactory(): void {
    if (!this.isRouterLink()) {
      return;
    }

    if (!isNullish(this._routerLinkFactory)) {
      return;
    }

    throw new RequiredMethodCallException('routerLink');
  }

  private validateCommandFactory(): void {
    if (!this.isCommand()) {
      return;
    }

    if (!isNullish(this._commandFactory)) {
      return;
    }

    throw new RequiredMethodCallException('command');
  }

  private isRouterLink(): boolean {
    return this._type === TableActionType.ROUTER_LINK;
  }

  private isCommand(): boolean {
    return this._type === TableActionType.COMMAND;
  }
}
