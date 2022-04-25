import { Pipe, PipeTransform } from '@angular/core';
import { Tuple } from '@utils/types/tuple';
import { Nullish } from '@utils/types/nullish';
import { isNullish } from '@utils/is-nullish';

@Pipe({
  name: 'boolean',
})
export class BooleanPipe implements PipeTransform {
  public transform(
    value: Nullish<boolean>,
    labels: Tuple<string>,
  ): Nullish<string> {
    if (isNullish(value)) {
      return value;
    }

    const [trueLabel, falseLabel] = labels;

    return value ? trueLabel : falseLabel;
  }
}
