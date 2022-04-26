import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';

export interface CustomCellContent<ColumnKey, Model> {
  model: Model;
  column: TableColumn<ColumnKey>;
  key: ColumnKey;
}
