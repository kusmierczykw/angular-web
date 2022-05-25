import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { MenuItem } from '@shared/menu/models/menu-item';
import { toObservable } from '@utils/rxjs/operators/to-observable';
import { Nil } from '@utils/types/nil';

declare type MenuItemsSource = MenuItem[] | Observable<MenuItem[]>;

@Pipe({
  name: 'onlyVisibleMenuItems$',
})
export class OnlyVisibleMenuItemsPipe implements PipeTransform {
  public transform(items: MenuItemsSource): Observable<MenuItem[]> {
    return toObservable(items).pipe(
      switchMap((items: MenuItem[]) =>
        combineLatest(this.resolveItemsVisibility(items)).pipe(
          map(this.onlyVisibleItems()),
        ),
      ),
    );
  }

  private resolveItemsVisibility = (items: MenuItem[]) =>
    items.map((item: MenuItem) =>
      item.visibility$.pipe(map((visible) => (visible ? item : null))),
    );

  private onlyVisibleItems = () => (items: Array<Nil<MenuItem>>) =>
    items.filter(Boolean) as MenuItem[];
}
