import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from '@shared/menu/models';
import { combineLatest, map, Observable, switchMap } from 'rxjs';

@Pipe({
  name: 'onlyVisibleMenuItems$',
})
export class OnlyVisibleMenuItemsPipe implements PipeTransform {
  public transform(items: Observable<MenuItem[]>): Observable<MenuItem[]> {
    return items.pipe(
      switchMap((items: MenuItem[]) =>
        combineLatest(this.resolveItemsVisibility(items)).pipe(
          map(this.onlyVisibleItems()),
        ),
      ),
    );
  }

  private resolveItemsVisibility = (items: MenuItem[]) =>
    items.map((item: MenuItem) =>
      item.visibility.pipe(map((visible) => (visible ? item : null))),
    );

  private onlyVisibleItems = () => (items: Array<MenuItem | null>) =>
    items.filter(Boolean) as MenuItem[];
}