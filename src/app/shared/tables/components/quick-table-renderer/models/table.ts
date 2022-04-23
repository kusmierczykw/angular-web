import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';

export class Table<ColumnKey, ActionKey, Model> {
  public constructor(
    public readonly columns: TableColumn<ColumnKey>[],
    public readonly actions: TableAction<ActionKey, Model>[],
  ) {}
}
