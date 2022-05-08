import { Pipe, PipeTransform } from '@angular/core';
import { Nullish } from '@utils/types/nullish';
import { isNullish } from '@utils/is-nullish';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';

@Pipe({
  name: 'onlyVisibilityColumns',
})
export class OnlyVisibilityColumnsPipe<Key> implements PipeTransform {
  public transform(
    columns: Nullish<TableColumns<Key>>,
  ): Nullish<TableColumns<Key>> {
    if (isNullish(columns)) {
      return columns;
    }

    return columns.filter(({ visibility }) => visibility);
  }
}
