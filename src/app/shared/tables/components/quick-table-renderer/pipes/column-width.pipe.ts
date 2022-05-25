import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Nil } from '@utils/types/nil';
import { isNil } from '@utils/is-nil';
import { TableActions } from '@shared/tables/components/quick-table-renderer/types/table-actions';

@Pipe({
  name: 'columnWidth',
})
export class ColumnWidthPipe implements PipeTransform {
  public transform<ColumnKey, ActionKey, Model>(
    column: TableColumn<ColumnKey>,
    actions: Nil<TableActions<ActionKey, Model>>,
  ): string {
    if (column.isAction) {
      if (!isNil(actions)) {
        return `${actions.length * 2 + 3}rem`;
      }

      return `2rem`;
    }

    return column.width;
  }
}
