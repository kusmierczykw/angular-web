import { Pipe, PipeTransform } from '@angular/core';
import { Tuple } from '@utils/types/tuple';
import { Nil } from '@utils/types/nil';
import { isNil } from '@utils/is-nil';

@Pipe({
  name: 'boolean',
})
export class BooleanPipe implements PipeTransform {
  public transform(value: Nil<boolean>, labels: Tuple<string>): Nil<string> {
    if (isNil(value)) {
      return value;
    }

    const [trueLabel, falseLabel] = labels;

    return value ? trueLabel : falseLabel;
  }
}
