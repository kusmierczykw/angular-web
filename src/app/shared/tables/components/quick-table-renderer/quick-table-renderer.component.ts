import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Table } from '@shared/tables/components/quick-table-renderer/models/table';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { TableAction } from '@shared/tables/components/quick-table-renderer/fragments/table-action/models/table-action';
import { CustomCellContent } from '@shared/tables/components/quick-table-renderer/interfaces/custom-cell-content';

@Component({
  selector: 'app-quick-table-renderer',
  templateUrl: './quick-table-renderer.component.html',
  styleUrls: ['./quick-table-renderer.component.scss'],
})
export class QuickTableRendererComponent<ColumnKey, ActionKey, Model>
  implements OnInit
{
  @Input() public data!: Model[];
  @Input() public quickTable!: Table<ColumnKey, ActionKey, Model>;
  @Input() public customCellContentTemplate?: TemplateRef<
    CustomCellContent<ColumnKey, Model>
  >;

  public columns!: TableColumn<ColumnKey>[];
  public actions!: TableAction<ActionKey, Model>[];

  public ngOnInit(): void {
    this.columns = this.quickTable.columns;
    this.actions = this.quickTable.actions;
  }
}
