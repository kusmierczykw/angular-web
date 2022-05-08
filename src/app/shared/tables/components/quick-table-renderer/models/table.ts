import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';
import { TableActions } from '@shared/tables/components/quick-table-renderer/types/table-actions';

export class Table<ColumnKey, ActionKey, Model> {
  public constructor(
    public readonly columns: TableColumns<ColumnKey>,
    public readonly actions: TableActions<ActionKey, Model>,
  ) {}
}
