import { Pipe, PipeTransform } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { toObservable } from '@utils/rxjs/operators/to-observable';
import { Nil } from '@utils/types/nil';
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
    () => (items: Array<Nil<TableAction<Key, Model>>>) =>
      items.filter(Boolean) as TableActions<Key, Model>;
}
