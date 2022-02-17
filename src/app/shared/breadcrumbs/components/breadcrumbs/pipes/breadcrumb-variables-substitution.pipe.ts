import { Pipe, PipeTransform } from '@angular/core';
import { BreadcrumbValueProviderService } from '@shared/breadcrumbs/components/breadcrumbs/services/breadcrumb-value-provider.service';
import { combineLatest, EMPTY, map, Observable, startWith } from 'rxjs';
import { BreadcrumbVariableService } from '@shared/breadcrumbs/utils/breadcrumb-variable.service';
import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';
import { debounce } from '@utils/rxjs/operators/debounce';

@Pipe({
  name: 'breadcrumbVariablesSubstitution$',
})
export class BreadcrumbVariablesSubstitutionPipe implements PipeTransform {
  public constructor(
    private readonly breadcrumbVariable: BreadcrumbVariableService,
    private readonly breadcrumbValueProvider: BreadcrumbValueProviderService,
  ) {}

  public transform(label: string): Observable<string> {
    return this.replaceVariablesInTheLabel(label);
  }

  private replaceVariablesInTheLabel(label: string): Observable<string> {
    return this.variablesSubstitutes(label).pipe(
      map((substitutes) =>
        substitutes.reduce(
          (replacedLabel, [variable, value]) =>
            replacedLabel.replace(variable, value),
          label,
        ),
      ),
      startWith(label),
      debounce(),
    );
  }

  private variablesSubstitutes(
    label: string,
  ): Observable<Array<[RouteBreadcrumbVariable, string]>> {
    const variables = this.breadcrumbVariable.fetchVariablesFormText(label);
    const variablesWithValuesSource = variables.map((variable) => {
      if (!this.breadcrumbVariable.isVariable(variable)) {
        return EMPTY;
      }

      return this.breadcrumbValueProvider
        .getValueFor(variable)
        .pipe(map((value) => [variable, value]));
    });

    return combineLatest(variablesWithValuesSource).pipe(
      map((substitutes) => this.onlyAvailableSubstitutes(substitutes)),
    );
  }

  private onlyAvailableSubstitutes = (
    substitutes: Array<string[] | null>,
  ): Array<[RouteBreadcrumbVariable, string]> =>
    substitutes.filter(Boolean) as Array<[RouteBreadcrumbVariable, string]>;
}
