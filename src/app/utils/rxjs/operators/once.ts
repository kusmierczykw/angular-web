import { take } from 'rxjs';

export function once() {
  return take(1);
}
