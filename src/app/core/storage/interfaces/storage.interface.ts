import { StorageKey } from '@core/storage/models/storage-key';

export interface Storage<Value = unknown> {
  set(key: StorageKey, value: Value): void;
  remove(key: StorageKey): void;
  clear(): void;
  get(key: StorageKey): Value;
  exists(key: StorageKey): boolean;
}
