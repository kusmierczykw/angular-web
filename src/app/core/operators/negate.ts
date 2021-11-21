import { map } from 'rxjs';

export const negate = map((value: boolean) => !value);
