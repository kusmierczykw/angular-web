import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { debounce } from '@utils/rxjs/operators/debounce';
import { TextVariableService } from '@shared/text-variables/services/text-variable.service';
import { TextValueProviderService } from '@shared/text-variables/services/text-value-provider.service';
import { Nil } from '@utils/types/nil';
import { Tuple } from '@utils/types/tuple';

type VariableValue = Tuple<string>;
type NullishVariableValue = Nil<VariableValue>;

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
  ): Observable<Array<VariableValue>> {
    const variables = this.stringVariable.fetchVariablesFormText(label);
    const variablesWithValuesSource: Array<Observable<NullishVariableValue>> =
      variables.map((variable) => {
        return this.textValueProvider
          .fetchValue(variable)
          .pipe(map((value) => [variable, value]));
      });

    return combineLatest(variablesWithValuesSource).pipe(
      map((substitutes) => this.onlyAvailableSubstitutes(substitutes)),
    );
  }

  private onlyAvailableSubstitutes = (
    substitutes: Array<NullishVariableValue>,
  ): Array<VariableValue> =>
    substitutes.filter(Boolean) as Array<VariableValue>;
}
