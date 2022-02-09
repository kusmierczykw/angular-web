import { Injectable } from '@angular/core';
import { Storage } from '@core/storage/interfaces';
import { StorageKey } from '@core/storage/models';
import { ValueDoesNotExistsException } from '@core/storage/exceptions/value-does-not-exists.exception';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService implements Storage {
  private readonly _localStorage = localStorage;

  public clear(): void {
    this._localStorage.clear();
  }

  public get(key: StorageKey): string {
    const value = this._localStorage.getItem(key.toString());

    if (!value) {
      throw new ValueDoesNotExistsException(key);
    }

    return value;
  }

  public remove(key: StorageKey): void {
    this._localStorage.removeItem(key.toString());
  }

  public set(key: StorageKey, value: string): void {
    this._localStorage.setItem(key.toString(), value);
  }

  public exists(key: StorageKey): boolean {
    try {
      return !!this.get(key);
    } catch (e) {
      return false;
    }
  }
}
