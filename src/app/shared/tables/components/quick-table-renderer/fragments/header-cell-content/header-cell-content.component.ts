import { Component, Input } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';
import { Nil } from '@utils/types/nil';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';
import { TableActions } from '@shared/tables/components/quick-table-renderer/types/table-actions';

@Component({
  selector: 'app-header-cell-content',
  templateUrl: './header-cell-content.component.html',
  styleUrls: ['./header-cell-content.component.scss'],
})
export class HeaderCellContentComponent<ColumnKey, ActionKey, Model> {
  @Input() public column!: TableColumn<ColumnKey>;
  @Input() public columns: Nil<TableColumns<ColumnKey>>;
  @Input() public actions: Nil<TableActions<ActionKey, Model>>;

  public readonly Type = TableColumnType;
}
