import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';

export class TableColumn<Key> {
  public constructor(
    private readonly key: Key,
    private readonly label: string,
    private readonly type: TableColumnType,
  ) {}
}
