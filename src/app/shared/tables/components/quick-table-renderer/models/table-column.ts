import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';
import { CssClass } from '@utils/types/css-class';
import { TableColumnSticky } from '@shared/tables/components/quick-table-renderer/enums/table-column-sticky';
import { ColumnKey } from '@shared/tables/components/quick-table-renderer/types/column-key';

export class TableColumn<Key> {
  public constructor(
    public readonly key: ColumnKey<Key>,
    public readonly label: string,
    public readonly type: TableColumnType,
    public readonly cssClass: CssClass[],
    public readonly visible: boolean,
    public readonly width: string,
    public readonly sticky: TableColumnSticky,
  ) {}

  public get stickyRight(): boolean {
    return this.sticky === TableColumnSticky.RIGHT;
  }

  public get stickyLeft(): boolean {
    return this.sticky === TableColumnSticky.LEFT;
  }

  public get isAction(): boolean {
    return this.type === TableColumnType.ACTION;
  }
}
