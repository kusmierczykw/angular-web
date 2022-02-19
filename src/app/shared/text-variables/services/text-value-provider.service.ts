import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TextValueProviderService {
  private valuesSource$ = new BehaviorSubject(
    new Map<string, Observable<string>>(),
  );

  public registerValue(
    variable: string,
    valueFactory: () => Observable<string>,
  ): void {
    const values = this.valuesSource$.getValue();

    values.set(variable, valueFactory());

    this.valuesSource$.next(values);
  }

  public fetchValue(variable: string): Observable<string> {
    return this.valuesSource$.pipe(
      switchMap((values) => {
        const value = values.get(variable);

        if (!value) {
          return of(variable);
        }

        return value;
      }),
    );
  }

  public unregisterValue(variable: string): void {
    const values = this.valuesSource$.getValue();

    values.delete(variable);

    this.valuesSource$.next(values);
  }
}
