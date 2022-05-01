import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { TableAction } from '@shared/tables/components/quick-table-renderer/fragments/table-action/models/table-action';
import { Nullish } from '@utils/types/nullish';
import { isNullish } from '@utils/is-nullish';

@Pipe({
  name: 'columnWidth',
})
export class ColumnWidthPipe implements PipeTransform {
  public transform<ColumnKey, ActionKey, Model>(
    column: TableColumn<ColumnKey>,
    actions: Nullish<TableAction<ActionKey, Model>[]>,
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
