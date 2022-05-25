import { Injectable } from '@angular/core';
import { UserContext } from '@core/auth/models/user-context';
import { BehaviorSubject, Observable } from 'rxjs';
import { Nil } from '@utils/types/nil';

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  public readonly context$: Observable<Nil<UserContext>>;

  private readonly contextSource$ = new BehaviorSubject<Nil<UserContext>>(null);

  public constructor() {
    this.context$ = this.contextSource$.asObservable();
  }

  public set(context: UserContext): void {
    this.contextSource$.next(context);
  }

  public clear(): void {
    this.contextSource$.next(null);
  }

  public hasContext(): boolean {
    return !!this.contextSource$.getValue();
  }
}
