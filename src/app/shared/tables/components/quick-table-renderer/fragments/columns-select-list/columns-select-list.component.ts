import { Component, Input } from '@angular/core';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';
import { Nil } from '@utils/types/nil';

@Component({
  selector: 'app-columns-select-list',
  templateUrl: './columns-select-list.component.html',
  styleUrls: ['./columns-select-list.component.scss'],
})
export class ColumnsSelectListComponent<ColumnKey> {
  @Input() public columns: Nil<TableColumns<ColumnKey>>;
}
