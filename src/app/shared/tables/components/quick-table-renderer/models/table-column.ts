import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';
import { CssClass } from '@utils/types/css-class';
import { Nullish } from '@utils/types/nullish';

export class TableColumn<ColumnKey> {
  public constructor(
    private readonly key: ColumnKey,
    private readonly label: string,
    private readonly type: TableColumnType,
    private readonly cssClass: Nullish<CssClass>,
  ) {}
}
