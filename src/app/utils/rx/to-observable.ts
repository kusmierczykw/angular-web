import { isObservable, Observable, of } from 'rxjs';

export const toObservable = <T>(value: T | Observable<T>): Observable<T> =>
  !isObservable(value) ? of(value) : value;
