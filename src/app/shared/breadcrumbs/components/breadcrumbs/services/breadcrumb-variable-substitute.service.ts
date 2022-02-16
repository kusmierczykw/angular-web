import { Injectable } from '@angular/core';
import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';
import { ValueNotSetForVariableException } from '@shared/breadcrumbs/components/breadcrumbs/exceptions/value-not-set-for-variable.exception';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbVariableSubstituteService {
  private values = new Map<RouteBreadcrumbVariable, string>();

  public substitute(variable: RouteBreadcrumbVariable, value: string): void {
    this.values.set(variable, value);
  }

  public valueFor(variable: RouteBreadcrumbVariable): string {
    const value = this.values.get(variable);

    if (!value) {
      throw new ValueNotSetForVariableException(variable);
    }

    return value;
  }
}
