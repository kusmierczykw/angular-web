import { map } from 'rxjs';

export function negate() {
  return map((value: boolean) => !value);
}
