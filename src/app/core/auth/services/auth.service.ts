import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { UserContextService } from './user-context.service';
import { TokenService } from './token.service';
import { RefreshToken, Token, UserContext } from '@core/auth/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(
    private readonly userContext: UserContextService,
    private readonly token: TokenService,
  ) {}

  public signInByUsernameAndPassword(
    username: string,
    password: string,
  ): Observable<void> {
    return of(void 0).pipe(
      tap({
        next: () => {
          this.token.setToken(new Token());
          this.token.setRefreshToken(new RefreshToken());
          this.userContext.set(new UserContext());
        },
      }),
    );
  }

  public refresh(): Observable<void> {
    return of(void 0).pipe(
      tap({
        next: () => {
          this.token.setToken(new Token());
          this.token.setRefreshToken(new RefreshToken());
          this.userContext.set(new UserContext());
        },
      }),
    );
  }

  public signOut(): Observable<void> {
    return of(void 0).pipe(
      tap({
        next: () => {
          this.userContext.clear();
          this.token.clear();
        },
      }),
    );
  }
}
