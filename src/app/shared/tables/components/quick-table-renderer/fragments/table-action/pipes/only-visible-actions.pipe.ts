import { Pipe, PipeTransform } from '@angular/core';
import { TableAction } from '@shared/tables/components/quick-table-renderer/fragments/table-action/models/table-action';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { toObservable } from '@utils/rxjs/operators/to-observable';
import { Nullish } from '@utils/types/nullish';

declare type TableActionSource<Key, Model> =
  | TableAction<Key, Model>[]
  | Observable<TableAction<Key, Model>[]>;

@Pipe({
  name: 'onlyVisibleActions$',
})
export class OnlyVisibleActionsPipe<Key, Model> implements PipeTransform {
  public transform(
    items: TableActionSource<Key, Model>,
  ): Observable<TableAction<Key, Model>[]> {
    return toObservable(items).pipe(
      switchMap((items: TableAction<Key, Model>[]) =>
        combineLatest(this.resolveItemsVisibility(items)).pipe(
          map(this.onlyVisibleItems()),
        ),
      ),
    );
  }

  private resolveItemsVisibility = (items: TableAction<Key, Model>[]) =>
    items.map((item: TableAction<Key, Model>) =>
      item.visibility$.pipe(map((visible) => (visible ? item : null))),
    );

  private onlyVisibleItems =
    () => (items: Array<Nullish<TableAction<Key, Model>>>) =>
      items.filter(Boolean) as TableAction<Key, Model>[];
}
