import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';

export class QuickTable<ColumnKey> {
  public constructor(public readonly columns: TableColumn<ColumnKey>[]) {}
}
