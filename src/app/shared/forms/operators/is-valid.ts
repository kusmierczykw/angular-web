import { map } from 'rxjs';
import { FormControlStatus } from '@shared/forms/types';

export const isValid = map((status: FormControlStatus) => status === 'VALID');
export const isPending = map(
  (status: FormControlStatus) => status === 'PENDING',
);
export const isInvalid = map(
  (status: FormControlStatus) => status === 'INVALID',
);
export const isDisabled = map(
  (status: FormControlStatus) => status === 'DISABLED',
);
