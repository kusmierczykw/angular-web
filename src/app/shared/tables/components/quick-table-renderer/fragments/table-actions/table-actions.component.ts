import { Component, Input } from '@angular/core';
import { TableActions } from '@shared/tables/components/quick-table-renderer/types/table-actions';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent<Key, Model> {
  @Input() public actions!: TableActions<Key, Model>;
  @Input() public model!: Model;
}
