import { Component, Input, OnInit } from '@angular/core';
import { QuickTable } from '@shared/tables/components/quick-table-renderer/models/quick-table';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Patient } from '@features/patient/models/patient';

@Component({
  selector: 'app-quick-table-renderer',
  templateUrl: './quick-table-renderer.component.html',
  styleUrls: ['./quick-table-renderer.component.scss'],
})
export class QuickTableRendererComponent<ColumnKey> implements OnInit {
  @Input() public quickTable!: QuickTable<ColumnKey>;

  public columns!: TableColumn<ColumnKey>[];
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

    console.log(this.columns);
  }
}
