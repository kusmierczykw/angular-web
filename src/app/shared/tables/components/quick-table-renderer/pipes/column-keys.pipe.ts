import { Pipe, PipeTransform } from '@angular/core';
import { ColumnKey } from '@shared/tables/components/quick-table-renderer/types/column-key';
import { Nil } from '@utils/types/nil';
import { isNil } from '@utils/is-nil';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';

@Pipe({
  name: 'columnKeys',
})
export class ColumnKeysPipe implements PipeTransform {
  public transform<Key>(
    columns: Nil<TableColumns<Key>>,
  ): Nil<ColumnKey<Key>[]> {
    if (isNil(columns)) {
      return columns;
    }

    return columns.map(({ key }) => key);
  }
}
