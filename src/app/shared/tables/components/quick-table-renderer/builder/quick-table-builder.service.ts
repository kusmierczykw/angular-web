import { Injectable } from '@angular/core';
import { QuickTableColumnBuilderService } from '@shared/tables/components/quick-table-renderer/builder/quick-table-column-builder.service';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { QuickTable } from '@shared/tables/components/quick-table-renderer/models/quick-table';

@Injectable({
  providedIn: 'root',
})
export class QuickTableBuilderService<ColumnKey> {
  private _columns: TableColumn<ColumnKey>[] = [];

  public constructor(
    private readonly columnBuilder: QuickTableColumnBuilderService<ColumnKey>,
  ) {
    this.reset();
  }

  public newInstance<ColumnKey>(): QuickTableBuilderService<ColumnKey> {
    return new QuickTableBuilderService(this.columnBuilder.newInstance());
  }

  public columns(
    factory: (
      builder: QuickTableColumnBuilderService<ColumnKey>,
    ) => TableColumn<ColumnKey>[],
  ): this {
    const columns = factory(this.columnBuilder);

    this._columns = [...this._columns, ...columns];

    return this;
  }

  public column(
    factory: (
      builder: QuickTableColumnBuilderService<ColumnKey>,
    ) => TableColumn<ColumnKey>,
  ): this {
    const column = factory(this.columnBuilder);

    this._columns.push(column);

    return this;
  }

  public build(): QuickTable<ColumnKey> {
    const quickTable = new QuickTable(this._columns);

    this.reset();

    return quickTable;
  }

  public reset(): this {
    this._columns = [];

    return this;
  }
}
