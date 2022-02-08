import { Injectable } from '@angular/core';
import { Storage } from '@core/storage/interfaces';
import { StorageKey } from '@core/storage/models';
import { ValueDoesNotExistsException } from '@core/storage/exceptions/value-does-not-exists.exception';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService<Value = unknown> implements Storage<Value> {
  private readonly localStorage = localStorage;

  public clear(): void {
    this.localStorage.clear();
  }

  // TODO Deserialize based on concrete type.
  public get(key: StorageKey): Value {
    const deserialized = this.localStorage.getItem(key.toString());

    if (!deserialized) {
      throw new ValueDoesNotExistsException(key);
    }

    return JSON.parse(deserialized) as Value;
  }

  public remove(key: StorageKey): void {
    this.localStorage.removeItem(key.toString());
  }

  // TODO Serialize based on concrete type.
  public set(key: StorageKey, value: Value): void {
    const serialized = JSON.stringify(value);

    this.localStorage.setItem(key.toString(), serialized);
  }

  public exists(key: StorageKey): boolean {
    try {
      return !!this.get(key);
    } catch (e) {
      return false;
    }
  }
}
