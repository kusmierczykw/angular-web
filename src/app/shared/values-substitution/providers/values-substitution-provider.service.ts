import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValuesSubstitutionProviderService {
  private valuesSource$ = new BehaviorSubject(
    new Map<string, Observable<string>>(),
  );

  public apply(variable: string, valueFactory: () => Observable<string>): void {
    const values = this.valuesSource$.getValue();

    values.set(variable, valueFactory());

    this.valuesSource$.next(values);
  }

  public fetch(variable: string): Observable<string> {
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

  public resolve(variable: string): void {
    const values = this.valuesSource$.getValue();

    values.delete(variable);

    this.valuesSource$.next(values);
  }
}
