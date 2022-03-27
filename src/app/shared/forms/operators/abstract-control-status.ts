import { filter, map, MonoTypeOperatorFunction, OperatorFunction } from 'rxjs';
import { FormControlStatus } from '@angular/forms';

export namespace AbstractControlStatus {
  export function isValid(): OperatorFunction<FormControlStatus, boolean> {
    return map((status: FormControlStatus) => status === 'VALID');
  }

  export function isInvalid(): OperatorFunction<FormControlStatus, boolean> {
    return map((status: FormControlStatus) => status === 'INVALID');
  }

  export function isPending(): OperatorFunction<FormControlStatus, boolean> {
    return map((status: FormControlStatus) => status === 'PENDING');
  }

  export function isDisabled(): OperatorFunction<FormControlStatus, boolean> {
    return map((status: FormControlStatus) => status === 'DISABLED');
  }

  export function onlyValid(): MonoTypeOperatorFunction<FormControlStatus> {
    return filter((status: FormControlStatus) => status === 'VALID');
  }

  export function onlyInvalid(): MonoTypeOperatorFunction<FormControlStatus> {
    return filter((status: FormControlStatus) => status === 'INVALID');
  }

  export function onlyPending(): MonoTypeOperatorFunction<FormControlStatus> {
    return filter((status: FormControlStatus) => status === 'PENDING');
  }

  export function onlyDisabled(): MonoTypeOperatorFunction<FormControlStatus> {
    return filter((status: FormControlStatus) => status === 'DISABLED');
  }
}
