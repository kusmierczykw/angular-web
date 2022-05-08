import { Component, Input } from '@angular/core';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';
import { Nullish } from '@utils/types/nullish';
import { QuickTableService } from '@shared/tables/components/quick-table-renderer/services/quick-table.service';

@Component({
  selector: 'app-columns-select-list',
  templateUrl: './columns-select-list.component.html',
  styleUrls: ['./columns-select-list.component.scss'],
})
export class ColumnsSelectListComponent<ColumnKey, ActionKey, Model> {
  @Input() public columns: Nullish<TableColumns<ColumnKey>>;

  public constructor(
    private readonly quickTable: QuickTableService<ColumnKey, ActionKey, Model>,
  ) {}
}
