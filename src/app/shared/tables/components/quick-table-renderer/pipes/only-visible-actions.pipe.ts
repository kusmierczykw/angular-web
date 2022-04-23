import { Pipe, PipeTransform } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';

@Pipe({
  name: 'onlyVisibleActions',
})
export class OnlyVisibleActionsPipe implements PipeTransform {
  public transform<ActionKey, Model>(
    actions: TableAction<ActionKey, Model>[],
  ): TableAction<ActionKey, Model>[] {
    return actions.filter(({ visible }) => visible);
  }
}
