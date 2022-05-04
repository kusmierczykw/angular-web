import { Component, Input } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';
import { Nullish } from '@utils/types/nullish';
import { TableAction } from '@shared/tables/components/quick-table-renderer/fragments/table-action/models/table-action';

@Component({
  selector: 'app-header-cell-content',
  templateUrl: './header-cell-content.component.html',
  styleUrls: ['./header-cell-content.component.scss'],
})
export class HeaderCellContentComponent<ColumnKey, ActionKey, Model> {
  @Input() public column!: TableColumn<ColumnKey>;
  @Input() public columns!: TableColumn<ColumnKey>[];
  @Input() public actions: Nullish<TableAction<ActionKey, Model>[]>;

  public readonly Type = TableColumnType;
}
