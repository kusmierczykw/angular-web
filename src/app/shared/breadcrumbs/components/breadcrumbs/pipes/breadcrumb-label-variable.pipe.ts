import { Pipe, PipeTransform } from '@angular/core';
import { BreadcrumbVariableSubstituteService } from '@shared/breadcrumbs/components/breadcrumbs/services/breadcrumb-variable-substitute.service';
import { isVariable } from '@shared/breadcrumbs/utils/is-variable';

@Pipe({
  name: 'breadcrumbLabelVariable',
})
export class BreadcrumbLabelVariablePipe implements PipeTransform {
  public constructor(
    private readonly labelVariable: BreadcrumbVariableSubstituteService,
  ) {}

  public transform(label: string): string {
    if (isVariable(label)) {
      try {
        return this.labelVariable.valueFor(label);
      } catch (e) {
        return label;
      }
    }

    return label;
  }
}
