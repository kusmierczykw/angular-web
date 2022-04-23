import { Injectable } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';
import { Nullish } from '@utils/types/nullish';
import { Icon } from '@core/icons/enums/icon';
import { RouterLink } from '@core/routing/types/router-link';
import { TableActionCommand } from '@shared/tables/components/quick-table-renderer/types/table-action-command';
import { isNullish } from '@utils/is-nullish';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { TableActionType } from '@shared/tables/components/quick-table-renderer/enums/table-action-type';

@Injectable({
  providedIn: 'root',
})
export class QuickTableRowActionBuilderService<Key, Model> {
  private _key: Nullish<Key>;
  private _type: Nullish<TableActionType>;
  private _tooltip: Nullish<string>;
  private _icon: Nullish<Icon>;
  private _link: Nullish<RouterLink>;
  private _command: Nullish<TableActionCommand<Model>>;

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

  public reset(): this {
    this._key = undefined;
    this._type = undefined;
    this._icon = undefined;
    this._link = undefined;
    this._tooltip = undefined;
    this._command = undefined;

    return this;
  }

  public build(): TableAction<Key, Model> {
    this.validateKey();
    this.validateIcon();
    this.validateType();

    const action = new TableAction<Key, Model>(
      this._key as Key,
      this._type as TableActionType,
      this._icon as Icon,
      this._tooltip as string,
      this._link,
      this._command,
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
}
