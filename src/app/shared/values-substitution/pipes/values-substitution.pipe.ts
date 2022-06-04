import { Pipe, PipeTransform } from '@angular/core';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { debounce } from '@utils/rxjs/operators/debounce';
import { ValuesSubstitutionProviderService } from '@shared/values-substitution/providers/values-substitution-provider.service';
import { Nil } from '@utils/types/nil';
import { Tuple } from '@utils/types/tuple';

type VariableValue = Tuple<string>;
type NilVariableValue = Nil<VariableValue>;

@Pipe({
  name: 'valuesSubstitution$',
})
export class ValuesSubstitutionPipe implements PipeTransform {
  private readonly VARIABLE_PATTERN = /{[\w-]+}/g;

  public constructor(
    private readonly substitutionProvider: ValuesSubstitutionProviderService,
  ) {}

  public transform(text: string): Observable<string> {
    return this.replaceVariables(text);
  }

  private replaceVariables(text: string): Observable<string> {
    return this.variablesSubstitutes(text).pipe(
      map((substitutes) =>
        substitutes.reduce(
          (replacedLabel, [variable, value]) =>
            replacedLabel.replace(variable, value),
          text,
        ),
      ),
      startWith(text),
      debounce(),
    );
  }

  private variablesSubstitutes(text: string): Observable<Array<VariableValue>> {
    const variables = this.extractVariables(text);
    const variablesSubstitutesSource: Array<Observable<NilVariableValue>> =
      variables.map((variable) => {
        return this.substitutionProvider
          .fetch(variable)
          .pipe(map((value) => [variable, value]));
      });

    return combineLatest(variablesSubstitutesSource).pipe(
      map((substitutes) => this.onlyAvailableSubstitutes(substitutes)),
    );
  }

  private onlyAvailableSubstitutes = (
    substitutes: Array<NilVariableValue>,
  ): Array<VariableValue> =>
    substitutes.filter(Boolean) as Array<VariableValue>;

  private extractVariables = (text: string): string[] =>
    Array.from(text.match(this.VARIABLE_PATTERN) || []);
}
