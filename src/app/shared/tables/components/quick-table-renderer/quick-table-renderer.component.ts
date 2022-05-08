import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Table } from '@shared/tables/components/quick-table-renderer/models/table';
import { CustomCellContent } from '@shared/tables/components/quick-table-renderer/interfaces/custom-cell-content';
import { QuickTableService } from '@shared/tables/components/quick-table-renderer/services/quick-table.service';
import { Observable } from 'rxjs';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';
import { TableActions } from '@shared/tables/components/quick-table-renderer/types/table-actions';

@Component({
  selector: 'app-quick-table-renderer',
  templateUrl: './quick-table-renderer.component.html',
  styleUrls: ['./quick-table-renderer.component.scss'],
  providers: [QuickTableService],
})
export class QuickTableRendererComponent<ColumnKey, ActionKey, Model>
  implements OnInit
{
  @Input() public data!: Model[];
  @Input() public quickTable!: Table<ColumnKey, ActionKey, Model>;
  @Input() public customCellContentTemplate?: TemplateRef<
    CustomCellContent<ColumnKey, Model>
  >;

  public columns$!: Observable<TableColumns<ColumnKey>>;
  public actions$!: Observable<TableActions<ActionKey, Model>>;

  public constructor(
    private readonly service: QuickTableService<ColumnKey, ActionKey, Model>,
  ) {
    this.columns$ = this.service.columns$;
    this.actions$ = this.service.actions$;
  }

  public ngOnInit(): void {
    this.configureQuickTable();
  }

  private configureQuickTable(): void {
    const { columns, actions } = this.quickTable;

    this.service.setColumns(columns);
    this.service.setActions(actions);
  }
}
