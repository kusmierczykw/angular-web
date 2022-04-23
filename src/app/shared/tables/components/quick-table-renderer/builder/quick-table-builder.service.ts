import { Injectable } from '@angular/core';
import { QuickTableColumnBuilderService } from '@shared/tables/components/quick-table-renderer/builder/quick-table-column-builder.service';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Table } from '@shared/tables/components/quick-table-renderer/models/table';
import { QuickTableRowActionBuilderService } from '@shared/tables/components/quick-table-renderer/builder/quick-table-row-action-builder.service';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';

@Injectable({
  providedIn: 'root',
})
export class QuickTableBuilderService<ColumnKey, ActionKey, Model> {
  private _columns: TableColumn<ColumnKey>[] = [];
  private _actions: TableAction<ActionKey, Model>[] = [];

  public constructor(
    private readonly columnBuilder: QuickTableColumnBuilderService<ColumnKey>,
    private readonly actionBuilder: QuickTableRowActionBuilderService<
      ActionKey,
      Model
    >,
  ) {
    this.reset();
  }

  public newInstance<ColumnKey, ActionKey, Model>(): QuickTableBuilderService<
    ColumnKey,
    ActionKey,
    Model
  > {
    return new QuickTableBuilderService(
      this.columnBuilder.newInstance(),
      this.actionBuilder.newInstance(),
    );
  }

  public columns(
    factory: (
      builder: QuickTableColumnBuilderService<ColumnKey>,
    ) => TableColumn<ColumnKey>[],
  ): this {
    const columns = factory(this.columnBuilder);

    columns.forEach((column) => this.column(() => column));

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

  public actions(
    factory: (
      builder: QuickTableRowActionBuilderService<ActionKey, Model>,
    ) => TableAction<ActionKey, Model>[],
  ): this {
    const actions = factory(this.actionBuilder);

    actions.forEach((action) => this.action(() => action));

    return this;
  }

  public action(
    factory: (
      builder: QuickTableRowActionBuilderService<ActionKey, Model>,
    ) => TableAction<ActionKey, Model>,
  ): this {
    const action = factory(this.actionBuilder);

    this._actions.push(action);

    return this;
  }

  public build(): Table<ColumnKey, ActionKey, Model> {
    const quickTable = new Table(this._columns, this._actions);

    this.reset();

    return quickTable;
  }

  public reset(): this {
    this._columns = [];
    this._actions = [];

    return this;
  }
}
