import { Component, Input, OnInit } from '@angular/core';
import { Table } from '@shared/tables/components/quick-table-renderer/models/table';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Patient } from '@features/patient/models/patient';
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

  public columns!: TableColumn<ColumnKey>[];
  public actions!: TableAction<ActionKey, Model>[];

  public data = [
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      false,
      12,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      1000,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      3000,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      900,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      200,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      1000,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      300,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      100,
    ),
  ];

  public ngOnInit(): void {
    this.columns = this.quickTable.columns;
    this.actions = this.quickTable.actions;
  }
}
