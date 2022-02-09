import { StorageKey } from '@core/storage/models/storage-key';

export interface Storage {
  set(key: StorageKey, value: string): void;
  remove(key: StorageKey): void;
  clear(): void;
  get(key: StorageKey): string;
  exists(key: StorageKey): boolean;
}
