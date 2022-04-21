import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';

@Pipe({
  name: 'columnKeys',
})
export class ColumnKeysPipe implements PipeTransform {
  public transform<ColumnKey>(columns: TableColumn<ColumnKey>[]): ColumnKey[] {
    return columns.map(({ key }) => key);
  }
}
