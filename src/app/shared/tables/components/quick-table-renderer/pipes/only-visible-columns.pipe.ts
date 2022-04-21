import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';

@Pipe({
  name: 'onlyVisibleColumns',
})
export class OnlyVisibleColumnsPipe implements PipeTransform {
  public transform<ColumKey>(
    columns: TableColumn<ColumKey>[],
  ): TableColumn<ColumKey>[] {
    return columns.filter(({ visible }) => visible);
  }
}
