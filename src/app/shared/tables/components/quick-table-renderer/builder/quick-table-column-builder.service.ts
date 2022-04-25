import { Injectable } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Nullish } from '@utils/types/nullish';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';
import { CssClass } from '@utils/types/css-class';
import { TableColumnSticky } from '@shared/tables/components/quick-table-renderer/enums/table-column-sticky';
import { ColumnKey } from '@shared/tables/components/quick-table-renderer/types/column-key';
import { isNullish } from '@utils/is-nullish';
import { TableColumnConfig } from '@shared/tables/components/quick-table-renderer/interfaces/table-column-config';
import { TableCurrencyColumnConfig } from '@shared/tables/components/quick-table-renderer/models/table-currency-column-config';
import { TableColumnTypeCssClassProviderService } from '@shared/tables/components/quick-table-renderer/providers/table-column-type-css-class-provider.service';
import { TableBooleanColumnConfig } from '@shared/tables/components/quick-table-renderer/models/table-boolean-column-config';

@Injectable({
  providedIn: 'root',
})
export class QuickTableColumnBuilderService<Key> {
  private _label: Nullish<string>;
  private _key: Nullish<ColumnKey<Key>>;
  private _type: Nullish<TableColumnType>;
  private _cssClass!: CssClass[];
  private _visible!: boolean;
  private _width: Nullish<string>;
  private _sticky: Nullish<TableColumnSticky>;
  private _config!: TableColumnConfig;

  public constructor(
    private readonly columnTypeCssProvider: TableColumnTypeCssClassProviderService,
  ) {
    this.reset();
  }

  public newInstance<Key>(): QuickTableColumnBuilderService<Key> {
    return new QuickTableColumnBuilderService(this.columnTypeCssProvider);
  }

  public init(key: ColumnKey<Key>): this {
    return this.key(key).type(TableColumnType.TEXT);
  }

  public initOrdinary(): this {
    return this.init('ordinary')
      .type(TableColumnType.ORDINARY)
      .label('#')
      .width('5rem');
  }

  public initAction(): this {
    return this.init('action').type(TableColumnType.ACTION);
  }

  public initDate(key: ColumnKey<Key>): this {
    return this.init(key).type(TableColumnType.DATE);
  }

  public initDateTime(key: ColumnKey<Key>): this {
    return this.init(key).type(TableColumnType.DATE_TIME);
  }

  public initCurrency(key: ColumnKey<Key>): this {
    return this.initNumber(key).type(TableColumnType.CURRENCY);
  }

  public initNumber(key: ColumnKey<Key>): this {
    return this.init(key).type(TableColumnType.NUMBER);
  }

  public initBoolean(key: ColumnKey<Key>): this {
    return this.init(key).type(TableColumnType.BOOLEAN);
  }

  public initCustom(key: ColumnKey<Key>): this {
    return this.init(key).type(TableColumnType.CUSTOM);
  }

  public setCurrencyConfig(config: TableCurrencyColumnConfig): this {
    this._config = {
      ...this._config,
      currency: config,
    };

    return this;
  }

  public setBooleanConfig(config: TableBooleanColumnConfig): this {
    this._config = {
      ...this._config,
      boolean: config,
    };

    return this;
  }

  public key(key: ColumnKey<Key>): this {
    this._key = key;

    return this;
  }

  public label(label: string): this {
    this._label = label;

    return this;
  }

  public type(type: TableColumnType): this {
    this._type = type;

    return this;
  }

  public cssClass(cssClass: CssClass): this {
    this._cssClass = [...this._cssClass, cssClass];

    return this;
  }

  public width(width: string): this {
    this._width = width;

    return this;
  }

  public stickyLeft(): this {
    this._sticky = TableColumnSticky.LEFT;

    return this;
  }

  public stickyRight(): this {
    this._sticky = TableColumnSticky.RIGHT;

    return this;
  }

  public reset(): this {
    this._label = undefined;
    this._key = undefined;
    this._type = undefined;
    this._cssClass = [];
    this._width = undefined;
    this._visible = true;
    this._sticky = TableColumnSticky.NONE;
    this._config = {};

    return this;
  }

  public build(): TableColumn<Key> {
    this.validateKey();
    this.validateLabel();
    this.validateType();
    this.validateWidth();

    this.setCurrencyDefaultConfig();
    this.setBooleanDefaultConfig();
    this.setDefaultCssClass();

    const column = new TableColumn(
      this._key as Key,
      this._label as string,
      this._type as TableColumnType,
      this._cssClass,
      this._visible,
      this._width as string,
      this._sticky as TableColumnSticky,
      this._config,
    );

    this.reset();

    return column;
  }

  private validateKey(): void {
    if (!isNullish(this._key)) {
      return;
    }

    throw new RequiredMethodCallException('key or initColumn');
  }

  private validateLabel(): void {
    if (!isNullish(this._label)) {
      return;
    }

    if (this.isActionType()) {
      return;
    }

    throw new RequiredMethodCallException('label or initColumn');
  }

  private validateType(): void {
    if (!isNullish(this._type)) {
      return;
    }

    throw new RequiredMethodCallException('type');
  }

  private validateWidth(): void {
    if (!isNullish(this._width)) {
      return;
    }

    if (this.isActionType()) {
      return;
    }

    throw new RequiredMethodCallException('width');
  }

  private setCurrencyDefaultConfig(): void {
    if (!this.isCurrencyType()) {
      return;
    }

    if (!this._config.currency) {
      this.setCurrencyConfig(new TableCurrencyColumnConfig('zł'));
    }
  }

  private setBooleanDefaultConfig(): void {
    if (!this.isBooleanType()) {
      return;
    }

    if (!this._config.boolean) {
      this.setBooleanConfig(new TableBooleanColumnConfig('Tak', 'Nie'));
    }
  }

  private setDefaultCssClass(): void {
    const cssClass = this.columnTypeCssProvider.get(this._type!);

    this._cssClass.push(cssClass);
  }

  private isActionType(): boolean {
    return this._type === TableColumnType.ACTION;
  }

  private isCurrencyType(): boolean {
    return this._type === TableColumnType.CURRENCY;
  }

  private isBooleanType(): boolean {
    return this._type === TableColumnType.BOOLEAN;
  }
}
