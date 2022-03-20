import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { UserContextService } from './user-context.service';
import { TokenService } from './token.service';
import { Token } from '@core/auth/models/token';
import { RefreshToken } from '@core/auth/models/refresh-token';
import { UserContext } from '@core/auth/models/user-context';

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
          this.token.setToken(
            new Token('30437e0c-54f7-447f-9607-8aa0eaac4aca'),
          );
          this.token.setRefreshToken(
            new RefreshToken('3db92c93-6a41-4cb0-9d86-030f5ce37c58'),
          );
          this.userContext.set(new UserContext());
        },
      }),
    );
  }

  public refresh(): Observable<void> {
    return of(void 0).pipe(
      tap({
        next: () => {
          this.token.setToken(
            new Token('2d23593e-1bc2-4a32-9b26-743da1b0bb67'),
          );
          this.token.setRefreshToken(
            new RefreshToken('a8239d62-2731-4145-b71b-8e382ab75003'),
          );
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
