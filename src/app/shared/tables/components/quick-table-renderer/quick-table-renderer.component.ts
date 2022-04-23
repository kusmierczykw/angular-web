import { Component, Input, OnInit } from '@angular/core';
import { Table } from '@shared/tables/components/quick-table-renderer/models/table';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Patient } from '@features/patient/models/patient';
import { TableColumnSticky } from '@shared/tables/components/quick-table-renderer/enums/table-column-sticky';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';

@Component({
  selector: 'app-quick-table-renderer',
  templateUrl: './quick-table-renderer.component.html',
  styleUrls: ['./quick-table-renderer.component.scss'],
})
export class QuickTableRendererComponent<ColumnKey, ActionKey, Model>
  implements OnInit
{
  @Input() public quickTable!: Table<ColumnKey, ActionKey, Model>;

  public readonly Sticky = TableColumnSticky;

  public columns!: TableColumn<ColumnKey>[];
  public actions!: TableAction<ActionKey, Model>[];

  public data = [
    new Patient('Jan', 'Kowalski', 12, new Date(), new Date(), 'ACTIVE', true),
    new Patient('Jan', 'Kowalski', 12, new Date(), new Date(), 'ACTIVE', true),
    new Patient('Jan', 'Kowalski', 12, new Date(), new Date(), 'ACTIVE', true),
    new Patient('Jan', 'Kowalski', 12, new Date(), new Date(), 'ACTIVE', true),
    new Patient('Jan', 'Kowalski', 12, new Date(), new Date(), 'ACTIVE', true),
    new Patient('Jan', 'Kowalski', 12, new Date(), new Date(), 'ACTIVE', true),
    new Patient('Jan', 'Kowalski', 12, new Date(), new Date(), 'ACTIVE', true),
    new Patient('Jan', 'Kowalski', 12, new Date(), new Date(), 'ACTIVE', true),
  ];

  public constructor() {}

  public ngOnInit(): void {
    this.columns = this.quickTable.columns;
    this.actions = this.quickTable.actions;
  }
}
