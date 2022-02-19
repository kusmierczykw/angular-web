import { Pipe, PipeTransform } from '@angular/core';
import {
  TextValueProviderService,
  TextVariableService,
} from '@shared/text-variables/services';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { debounce } from '@utils/rxjs/operators/debounce';

@Pipe({
  name: 'textVariablesSubstitution$',
})
export class TextVariablesSubstitutionPipe implements PipeTransform {
  public constructor(
    private readonly stringVariable: TextVariableService,
    private readonly textValueProvider: TextValueProviderService,
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
  ): Observable<Array<[string, string]>> {
    const variables = this.stringVariable.fetchVariablesFormText(label);
    const variablesWithValuesSource = variables.map((variable) => {
      return this.textValueProvider
        .fetchValue(variable)
        .pipe(map((value) => [variable, value]));
    });

    return combineLatest(variablesWithValuesSource).pipe(
      map((substitutes) => this.onlyAvailableSubstitutes(substitutes)),
    );
  }

  private onlyAvailableSubstitutes = (
    substitutes: Array<string[] | null>,
  ): Array<[string, string]> =>
    substitutes.filter(Boolean) as Array<[string, string]>;
}
