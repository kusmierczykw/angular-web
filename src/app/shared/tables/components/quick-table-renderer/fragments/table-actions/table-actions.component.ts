import { Component, Input } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent<ActionKey, Model> {
  @Input() public actions!: TableAction<ActionKey, Model>[];
  @Input() public model!: Model;
}
