import { Component, Input } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';

@Component({
  selector: 'app-columns-select-list',
  templateUrl: './columns-select-list.component.html',
  styleUrls: ['./columns-select-list.component.scss'],
})
export class ColumnsSelectListComponent<Key> {
  @Input() public columns!: TableColumn<Key>[];
}
