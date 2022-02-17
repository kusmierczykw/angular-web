import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbVariableService {
  private readonly VARIABLE_PATTERN = /{[\w-]+}/g;

  public fetchVariablesFormText(text: string): string[] {
    return Array.from(text.match(this.VARIABLE_PATTERN) || []);
  }

  public isVariable(
    predictable: string,
  ): predictable is RouteBreadcrumbVariable {
    return !!Object.values(RouteBreadcrumbVariable).find(
      (variable) => predictable === variable,
    );
  }
}
