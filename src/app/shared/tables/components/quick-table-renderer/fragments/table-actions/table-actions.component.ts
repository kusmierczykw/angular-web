import { Component, Input } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/fragments/table-action/models/table-action';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent<Key, Model> {
  @Input() public actions!: TableAction<Key, Model>[];
  @Input() public model!: Model;
}
