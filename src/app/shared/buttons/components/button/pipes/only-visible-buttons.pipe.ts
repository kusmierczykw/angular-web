import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { Button } from '@shared/buttons/components/button/models/button';
import { toObservable } from '@utils/rxjs/operators/to-observable';

declare type ButtonsSource = Button[] | Observable<Button[]>;

@Pipe({
  name: 'onlyVisibleButtons$',
})
export class OnlyVisibleButtonsPipe implements PipeTransform {
  public transform(actions: ButtonsSource): Observable<Button[]> {
    return toObservable(actions).pipe(
      switchMap((actions: Button[]) =>
        combineLatest(this.resolveVisibility(actions)).pipe(
          map(this.onlyVisible()),
        ),
      ),
    );
  }

  private resolveVisibility = (buttons: Button[]) =>
    buttons.map((item: Button) =>
      item.visibility$.pipe(map((visible) => (visible ? item : null))),
    );

  private onlyVisible = () => (button: Array<Button | null>) =>
    button.filter(Boolean) as Button[];
}
