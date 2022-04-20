import { Injectable } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Nullish } from '@utils/types/nullish';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';

@Injectable({
  providedIn: 'root',
})
export class QuickTableColumnBuilderService<Key> {
  private _label: Nullish<string>;
  private _key: Nullish<Key>;
  private _type: Nullish<TableColumnType>;

  public constructor() {
    this.reset();
  }

  public newInstance<Key>(): QuickTableColumnBuilderService<Key> {
    return new QuickTableColumnBuilderService();
  }

  public initColumn(key: Key, label: string): this {
    this.key(key).label(label);

    return this;
  }

  public initTextColumn(key: Key, label: string): this {
    this.initColumn(key, label).type(TableColumnType.TEXT);

    return this;
  }

  public key(key: Key): this {
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

  public reset(): this {
    this._label = this._key = this._type = undefined;

    return this;
  }

  public build(): TableColumn<Key> {
    this.validateKey();
    this.validateLabel();

    return new TableColumn(
      this._key as Key,
      this._label as string,
      this._type as TableColumnType,
    );
  }

  private validateKey(): void {
    if (this._key) {
      return;
    }

    throw new RequiredMethodCallException('key');
  }

  private validateLabel(): void {
    if (this._label) {
      return;
    }

    throw new RequiredMethodCallException('label');
  }

  private validateType(): void {
    if (this._type) {
      return;
    }

    throw new RequiredMethodCallException('type');
  }
}
