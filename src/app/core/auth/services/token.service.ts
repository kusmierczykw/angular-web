import { Inject, Injectable } from '@angular/core';
import { RefreshToken, Token } from '@core/auth/models';
import { STORAGE_TOKEN } from '@core/storage/tokens';
import { Storage } from '@core/storage/interfaces';
import { StorageKey } from '@core/storage/models';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly TOKEN_KEY = new StorageKey(
    '1878229e-0a03-4f41-8c7f-23dab8a87590',
  );
  private readonly REFRESH_TOKEN_KEY = new StorageKey(
    '2ce109d4-595f-4469-a878-aee150f6dac4',
  );

  public constructor(
    @Inject(STORAGE_TOKEN) private readonly storage: Storage,
  ) {}

  public setToken(token: Token): void {
    this.storage.set(this.TOKEN_KEY, token);
  }

  public setRefreshToken(token: RefreshToken): void {
    this.storage.set(this.REFRESH_TOKEN_KEY, token);
  }

  public clear(): void {
    this.clearToken();
    this.clearRefreshToken();
  }

  private clearToken(): void {
    this.storage.remove(this.TOKEN_KEY);
  }

  private clearRefreshToken(): void {
    this.storage.remove(this.REFRESH_TOKEN_KEY);
  }
}
