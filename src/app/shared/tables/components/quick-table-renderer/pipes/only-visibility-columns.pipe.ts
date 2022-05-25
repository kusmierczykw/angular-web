import { Pipe, PipeTransform } from '@angular/core';
import { Nil } from '@utils/types/nil';
import { isNil } from '@utils/is-nil';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';

@Pipe({
  name: 'onlyVisibilityColumns',
})
export class OnlyVisibilityColumnsPipe<Key> implements PipeTransform {
  public transform(columns: Nil<TableColumns<Key>>): Nil<TableColumns<Key>> {
    if (isNil(columns)) {
      return columns;
    }

    return columns.filter(({ visibility }) => visibility);
  }
}
