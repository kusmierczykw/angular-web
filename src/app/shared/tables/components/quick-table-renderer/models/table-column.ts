import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';
import { CssClass } from '@utils/types/css-class';

export class TableColumn<ColumnKey> {
  public constructor(
    public readonly key: ColumnKey,
    public readonly label: string,
    public readonly type: TableColumnType,
    public readonly cssClass: CssClass[],
    public readonly visible: boolean,
    public readonly width: string,
  ) {}
}
