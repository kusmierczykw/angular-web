import { map } from 'rxjs';
import { FormControlStatus } from '@shared/forms/types';

export const isValid = map((status: FormControlStatus) => status === 'VALID');
