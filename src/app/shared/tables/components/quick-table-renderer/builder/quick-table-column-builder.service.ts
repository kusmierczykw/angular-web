import { Injectable } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Nullish } from '@utils/types/nullish';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';
import { CssClass } from '@utils/types/css-class';
import { TableColumnSticky } from '@shared/tables/components/quick-table-renderer/enums/table-column-sticky';

@Injectable({
  providedIn: 'root',
})
export class QuickTableColumnBuilderService<ColumnKey> {
  private _label: Nullish<string>;
  private _key: Nullish<ColumnKey>;
  private _type: Nullish<TableColumnType>;
  private _cssClass!: CssClass[];
  private _visible!: boolean;
  private _width: Nullish<string>;
  private _sticky: Nullish<TableColumnSticky>;

  public constructor() {
    this.reset();
  }

  public newInstance<Key>(): QuickTableColumnBuilderService<Key> {
    return new QuickTableColumnBuilderService();
  }

  public init(key: ColumnKey): this {
    return this.key(key).type(TableColumnType.TEXT);
  }

  public initOrdinaryColumn(key?: ColumnKey): this {
    return this.key(key ?? ('ordinary' as unknown as ColumnKey))
      .type(TableColumnType.ORDINARY)
      .label('#')
      .width('5rem');
  }

  public key(key: ColumnKey): this {
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

    return this;
  }

  public build(): TableColumn<ColumnKey> {
    this.validateKey();
    this.validateLabel();
    this.validateType();
    this.validateWidth();

    const column = new TableColumn(
      this._key as ColumnKey,
      this._label as string,
      this._type as TableColumnType,
      this._cssClass,
      this._visible,
      this._width as string,
      this._sticky as TableColumnSticky,
    );

    this.reset();

    return column;
  }

  private validateKey(): void {
    if (this._key) {
      return;
    }

    throw new RequiredMethodCallException('key or initColumn');
  }

  private validateLabel(): void {
    if (this._label) {
      return;
    }

    throw new RequiredMethodCallException('label or initColumn');
  }

  private validateType(): void {
    if (this._type) {
      return;
    }

    throw new RequiredMethodCallException('type');
  }

  private validateWidth(): void {
    if (this._width) {
      return;
    }

    throw new RequiredMethodCallException('width');
  }
}
