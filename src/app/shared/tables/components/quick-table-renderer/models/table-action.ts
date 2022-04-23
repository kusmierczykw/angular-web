import { RouterLink } from '@core/routing/types/router-link';
import { Icon } from '@core/icons/enums/icon';
import { Nullish } from '@utils/types/nullish';
import { TableActionCommand } from '@shared/tables/components/quick-table-renderer/types/table-action-command';
import { TableActionType } from '@shared/tables/components/quick-table-renderer/enums/table-action-type';

export class TableAction<Key, Model> {
  public constructor(
    public readonly key: Key,
    public readonly type: Nullish<TableActionType>,
    public readonly icon: Icon,
    public readonly tooltip: string,
    public readonly routerLink: Nullish<RouterLink>,
    public readonly command: Nullish<TableActionCommand<Model>>,
  ) {}
}
