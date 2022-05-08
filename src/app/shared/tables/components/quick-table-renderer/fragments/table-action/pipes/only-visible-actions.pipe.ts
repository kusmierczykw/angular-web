import { Pipe, PipeTransform } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/fragments/table-action/models/table-action';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { toObservable } from '@utils/rxjs/operators/to-observable';
import { Nullish } from '@utils/types/nullish';
import { TableActions } from '@shared/tables/components/quick-table-renderer/types/table-actions';

declare type TableActionSource<Key, Model> =
  | TableActions<Key, Model>
  | Observable<TableActions<Key, Model>>;

@Pipe({
  name: 'onlyVisibleActions$',
})
export class OnlyVisibleActionsPipe<Key, Model> implements PipeTransform {
  public transform(
    items: TableActionSource<Key, Model>,
  ): Observable<TableActions<Key, Model>> {
    return toObservable(items).pipe(
      switchMap((items: TableActions<Key, Model>) =>
        combineLatest(this.resolveItemsVisibility(items)).pipe(
          map(this.onlyVisibleItems()),
        ),
      ),
    );
  }

  private resolveItemsVisibility = (items: TableActions<Key, Model>) =>
    items.map((item: TableAction<Key, Model>) =>
      item.visibility$.pipe(map((visible) => (visible ? item : null))),
    );

  private onlyVisibleItems =
    () => (items: Array<Nullish<TableAction<Key, Model>>>) =>
      items.filter(Boolean) as TableActions<Key, Model>;
}
