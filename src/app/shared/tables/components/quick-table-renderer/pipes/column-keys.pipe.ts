import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { ColumnKey } from '@shared/tables/components/quick-table-renderer/types/column-key';

@Pipe({
  name: 'columnKeys',
})
export class ColumnKeysPipe implements PipeTransform {
  public transform<Key>(columns: TableColumn<Key>[]): ColumnKey<Key>[] {
    return columns.map(({ key }) => key);
  }
}
