import { Component, Input } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';
import { Nullish } from '@utils/types/nullish';
import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';

@Component({
  selector: 'app-cell-content',
  templateUrl: './cell-content.component.html',
  styleUrls: ['./cell-content.component.scss'],
})
export class CellContentComponent<ColumnKey, ActionKey, Model> {
  @Input() public column!: TableColumn<ColumnKey>;
  @Input() public model!: Model;
  @Input() public actions: Nullish<TableAction<ActionKey, Model>[]>;

  public readonly Type = TableColumnType;

  public get key(): keyof Model {
    return this.column.key as keyof Model;
  }
}
