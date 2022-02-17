import { debounceTime } from 'rxjs';

export const debounce = <T>() => debounceTime<T>(0);
