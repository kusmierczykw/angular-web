import { Injectable } from '@angular/core';
import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbValueProviderService {
  private valuesSource$ = new BehaviorSubject(
    new Map<RouteBreadcrumbVariable, Observable<string>>(),
  );

  public setValueFor(
    variable: RouteBreadcrumbVariable,
    valueFactory: () => Observable<string>,
  ): void {
    const values = this.valuesSource$.getValue();

    values.set(variable, valueFactory());

    this.valuesSource$.next(values);
  }

  public getValueFor(variable: RouteBreadcrumbVariable): Observable<string> {
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

  public clearValueFor(variable: RouteBreadcrumbVariable): void {
    const values = this.valuesSource$.getValue();

    values.delete(variable);

    this.valuesSource$.next(values);
  }
}
