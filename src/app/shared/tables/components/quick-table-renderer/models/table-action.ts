import { Icon } from '@shared/icons/enums/icon';
import { Nullish } from '@utils/types/nullish';
import { TableActionCommand } from '@shared/tables/components/quick-table-renderer/types/table-action-command';
import { TableActionType } from '@shared/tables/components/quick-table-renderer/enums/table-action-type';
import { TableActionRouterLink } from '@shared/tables/components/quick-table-renderer/types/table-action-router-link';
import { Observable } from 'rxjs';
import { TableActionKey } from '@shared/tables/components/quick-table-renderer/types/table-action-key';
import { TableActions } from '@shared/tables/components/quick-table-renderer/types/table-actions';

export class TableAction<Key, Model> {
  public constructor(
    public readonly key: TableActionKey<Key>,
    public readonly type: TableActionType,
    public readonly icon: Nullish<Icon>,
    public readonly tooltip: string,
    public readonly label: string,
    public readonly routerLinkFactory: Nullish<TableActionRouterLink<Model>>,
    public readonly commandFactory: Nullish<TableActionCommand<Model>>,
    public readonly visibility$: Observable<boolean>,
    public readonly children: TableActions<Key, Model>,
  ) {}
}
