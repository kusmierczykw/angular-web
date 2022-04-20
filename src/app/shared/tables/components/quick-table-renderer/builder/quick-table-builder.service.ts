import { Injectable } from '@angular/core';
import { QuickTableColumnBuilderService } from '@shared/tables/components/quick-table-renderer/builder/quick-table-column-builder.service';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';

@Injectable({
  providedIn: 'root',
})
export class QuickTableBuilderService<Key> {
  private _columns: TableColumn<Key>[] = [];

  public constructor(
    private readonly columnBuilder: QuickTableColumnBuilderService<Key>,
  ) {
    this.reset();
  }

  public newInstance<Key>(): QuickTableBuilderService<Key> {
    return new QuickTableBuilderService(this.columnBuilder.newInstance());
  }

  public column(
    factory: (builder: QuickTableColumnBuilderService<Key>) => TableColumn<Key>,
  ): this {
    const column = factory(this.columnBuilder);

    this._columns.push(column);

    return this;
  }

  public reset(): this {
    this._columns = [];

    return this;
  }
}
