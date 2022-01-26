import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '@shared/menu/models';
import { toObservable } from '@utils/rx/to-observable';
import { combineLatest, map, Observable, switchMap } from 'rxjs';

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

  private onlyVisibleItems = () => (items: Array<MenuItem | null>) =>
    items.filter(Boolean) as MenuItem[];
}
