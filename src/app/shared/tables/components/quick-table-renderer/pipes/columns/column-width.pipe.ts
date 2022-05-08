import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Nullish } from '@utils/types/nullish';
import { isNullish } from '@utils/is-nullish';
import { TableActions } from '@shared/tables/components/quick-table-renderer/types/table-actions';

@Pipe({
  name: 'columnWidth',
})
export class ColumnWidthPipe implements PipeTransform {
  public transform<ColumnKey, ActionKey, Model>(
    column: TableColumn<ColumnKey>,
    actions: Nullish<TableActions<ActionKey, Model>>,
  ): string {
    if (column.isAction) {
      if (!isNullish(actions)) {
        return `${actions.length * 2 + 3}rem`;
      }

      return `2rem`;
    }

    return column.width;
  }
}
