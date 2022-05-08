import { Pipe, PipeTransform } from '@angular/core';
import { ColumnKey } from '@shared/tables/components/quick-table-renderer/types/column-key';
import { Nullish } from '@utils/types/nullish';
import { isNullish } from '@utils/is-nullish';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';

@Pipe({
  name: 'columnKeys',
})
export class ColumnKeysPipe implements PipeTransform {
  public transform<Key>(
    columns: Nullish<TableColumns<Key>>,
  ): Nullish<ColumnKey<Key>[]> {
    if (isNullish(columns)) {
      return columns;
    }

    return columns.map(({ key }) => key);
  }
}
