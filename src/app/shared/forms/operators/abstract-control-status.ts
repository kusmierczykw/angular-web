import { map } from 'rxjs';
import { FormControlStatus } from '@angular/forms';

export function abstractControlStatus() {
  return map((status: FormControlStatus) => status === 'VALID');
}

export function isPending() {
  return map((status: FormControlStatus) => status === 'PENDING');
}

export function isInvalid() {
  return map((status: FormControlStatus) => status === 'INVALID');
}

export function isDisabled() {
  return map((status: FormControlStatus) => status === 'DISABLED');
}
