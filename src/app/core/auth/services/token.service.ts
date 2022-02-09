import { Inject, Injectable } from '@angular/core';
import { RefreshToken, Token } from '@core/auth/models';
import { STORAGE_TOKEN } from '@core/storage/tokens';
import { Storage } from '@core/storage/interfaces';
import { StorageKey } from '@core/storage/models';
import { JsonParserService } from '@core/json/json-parser.service';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public readonly TOKEN_KEY = new StorageKey(
    '1878229e-0a03-4f41-8c7f-23dab8a87590',
  );
  public readonly REFRESH_TOKEN_KEY = new StorageKey(
    '2ce109d4-595f-4469-a878-aee150f6dac4',
  );

  public token$: Observable<Token | null>;
  public refreshToken$: Observable<RefreshToken | null>;

  private tokenSource$ = new ReplaySubject<Token | null>(1);
  private refreshTokenSource$ = new ReplaySubject<RefreshToken | null>(1);

  public constructor(
    @Inject(STORAGE_TOKEN) private readonly storage: Storage,
    private readonly jsonParser: JsonParserService,
  ) {
    this.token$ = this.tokenSource$.asObservable();
    this.refreshToken$ = this.refreshTokenSource$.asObservable();

    this.fetchTokenFromStorage();
    this.fetchRefreshTokenFromStorage();
  }

  public setToken(token: Token): void {
    this.tokenSource$.next(token);
    this.saveTokenInStorage(token);
  }

  public setRefreshToken(token: RefreshToken): void {
    this.refreshTokenSource$.next(token);
    this.saveRefreshTokenInStorage(token);
  }

  public clear(): void {
    this.clearToken();
    this.clearRefreshToken();
  }

  private clearToken(): void {
    this.tokenSource$.next(null);
    this.storage.remove(this.TOKEN_KEY);
  }

  private clearRefreshToken(): void {
    this.refreshTokenSource$.next(null);
    this.storage.remove(this.REFRESH_TOKEN_KEY);
  }

  private saveTokenInStorage(token: Token): void {
    const serialized = this.jsonParser.serialize(token);

    this.storage.set(this.TOKEN_KEY, serialized);
  }

  private saveRefreshTokenInStorage(token: RefreshToken): void {
    const serialized = this.jsonParser.serialize(token);

    this.storage.set(this.REFRESH_TOKEN_KEY, serialized);
  }

  private fetchTokenFromStorage(): void {
    try {
      const serializedToken = this.storage.get(this.TOKEN_KEY);
      const token = this.jsonParser.deserialize(serializedToken, Token);

      this.tokenSource$.next(token);
    } catch (e) {}
  }

  private fetchRefreshTokenFromStorage(): void {
    try {
      const serializedToken = this.storage.get(this.REFRESH_TOKEN_KEY);
      const token = this.jsonParser.deserialize(serializedToken, RefreshToken);

      this.refreshTokenSource$.next(token);
    } catch (e) {}
  }
}
