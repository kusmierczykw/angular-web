import { Injectable } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/fragments/table-action/models/table-action';
import { Nullish } from '@utils/types/nullish';
import { Icon } from '@core/icons/enums/icon';
import { TableActionCommand } from '@shared/tables/components/quick-table-renderer/fragments/table-action/types/table-action-command';
import { isNullish } from '@utils/is-nullish';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { TableActionType } from '@shared/tables/components/quick-table-renderer/enums/table-action-type';
import { TableActionRouterLink } from '@shared/tables/components/quick-table-renderer/fragments/table-action/types/table-action-router-link';
import { Observable, of } from 'rxjs';
import { TableActionKey } from '@shared/tables/components/quick-table-renderer/fragments/table-action/types/table-action-key';

@Injectable({
  providedIn: 'root',
})
export class QuickTableRowActionBuilderService<Key, Model> {
  private _key: Nullish<TableActionKey<Key>>;
  private _type: Nullish<TableActionType>;
  private _tooltip: Nullish<string>;
  private _label: Nullish<string>;
  private _icon: Nullish<Icon>;
  private _routerLinkFactory: Nullish<TableActionRouterLink<Model>>;
  private _commandFactory: Nullish<TableActionCommand<Model>>;
  private _visibility$!: Observable<boolean>;
  private _children!: TableAction<Key, Model>[];

  public constructor() {
    this.reset();
  }

  public newInstance<Key, Model>() {
    return new QuickTableRowActionBuilderService<Key, Model>();
  }

  public init(key: TableActionKey<Key>): this {
    return this.key(key);
  }

  public initRouterLink(key: TableActionKey<Key>): this {
    return this.init(key).type(TableActionType.ROUTER_LINK);
  }

  public initCommand(key: TableActionKey<Key>): this {
    return this.init(key).type(TableActionType.COMMAND);
  }

  public initMore(): this {
    return this.init('more')
      .type(TableActionType.MORE)
      .tooltip('Więcej')
      .icon(Icon.THREE_DOTS_VERTICAL);
  }

  public type(type: TableActionType): this {
    this._type = type;

    return this;
  }

  public key(key: TableActionKey<Key>): this {
    this._key = key;

    return this;
  }

  public icon(icon: Icon): this {
    this._icon = icon;

    return this;
  }

  public visibility(visibility: Observable<boolean>): this {
    this._visibility$ = visibility;

    return this;
  }

  public tooltip(tooltip: string): this {
    this._tooltip = tooltip;

    return this;
  }

  public label(label: string): this {
    this._label = label;

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

  public children(
    factory: (
      builder: QuickTableRowActionBuilderService<Key, Model>,
    ) => TableAction<Key, Model>[],
  ): this {
    const children = factory(this.newInstance());

    this._children = [...this._children, ...children];

    return this;
  }

  public child(
    factory: (
      builder: QuickTableRowActionBuilderService<Key, Model>,
    ) => TableAction<Key, Model>,
  ): this {
    const child = factory(this.newInstance());

    this._children.push(child);

    return this;
  }

  public reset(): this {
    this._key = undefined;
    this._type = undefined;
    this._icon = undefined;
    this._routerLinkFactory = undefined;
    this._tooltip = undefined;
    this._commandFactory = undefined;
    this._visibility$ = of(true);
    this._children = [];

    return this;
  }

  public build(): TableAction<Key, Model> {
    this.validateKey();
    this.validateType();
    this.validateTooltipOrLabel();
    this.validateMoreAction();
    this.validateRouterLinkFactory();
    this.validateCommandFactory();
    this.configureDefaultTooltipOrLabel();

    const action = new TableAction<Key, Model>(
      this._key as Key,
      this._type as TableActionType,
      this._icon as Icon,
      this._tooltip as string,
      this._label as string,
      this._routerLinkFactory,
      this._commandFactory,
      this._visibility$,
      this._children,
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

  private validateType(): void {
    if (!isNullish(this._type)) {
      return;
    }

    throw new RequiredMethodCallException('type');
  }

  private validateTooltipOrLabel(): void {
    if (!isNullish(this._tooltip)) {
      return;
    }

    if (!isNullish(this._label)) {
      return;
    }

    throw new RequiredMethodCallException('tooltip or label');
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

  private validateMoreAction(): void {
    if (!this.isMore()) {
      return;
    }

    if (this.haveChildren()) {
      return;
    }

    throw new RequiredMethodCallException('child or children');
  }

  private isRouterLink(): boolean {
    return this._type === TableActionType.ROUTER_LINK;
  }

  private isCommand(): boolean {
    return this._type === TableActionType.COMMAND;
  }

  private isMore(): boolean {
    return this._type === TableActionType.MORE;
  }

  private haveChildren(): boolean {
    return this._children.length > 0;
  }

  private configureDefaultTooltipOrLabel() {
    if (isNullish(this._label)) {
      this._label = this._tooltip;

      return;
    }

    if (isNullish(this._tooltip)) {
      this._tooltip = this._label;

      return;
    }
  }
}
