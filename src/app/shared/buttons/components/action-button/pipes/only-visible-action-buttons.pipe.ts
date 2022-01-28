import { Pipe, PipeTransform } from '@angular/core';
import { ActionButton } from '@shared/buttons/components/action-button/models';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { toObservable } from '@utils/rxjs/operators';

declare type ActionButtonsSource = ActionButton[] | Observable<ActionButton[]>;

@Pipe({
  name: 'onlyVisibleActionButtons$',
})
export class OnlyVisibleActionButtonsPipe implements PipeTransform {
  public transform(actions: ActionButtonsSource): Observable<ActionButton[]> {
    return toObservable(actions).pipe(
      switchMap((actions: ActionButton[]) =>
        combineLatest(this.resolveItemsVisibility(actions)).pipe(
          map(this.onlyVisibleItems()),
        ),
      ),
    );
  }

  private resolveItemsVisibility = (items: ActionButton[]) =>
    items.map((item: ActionButton) =>
      item.visibility$.pipe(map((visible) => (visible ? item : null))),
    );

  private onlyVisibleItems = () => (items: Array<ActionButton | null>) =>
    items.filter(Boolean) as ActionButton[];
}
