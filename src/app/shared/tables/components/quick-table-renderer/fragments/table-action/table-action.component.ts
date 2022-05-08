import { Component, Input } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';
import { TableActionType } from '@shared/tables/components/quick-table-renderer/enums/table-action-type';

@Component({
  selector: 'app-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.scss'],
})
export class TableActionComponent<Key, Model> {
  @Input() public action!: TableAction<Key, Model>;
  @Input() public model!: Model;

  public readonly Type = TableActionType;
}
