import { StorageKey } from '@core/storage/models/storage-key';

export class ValueDoesNotExistsException extends Error {
  public constructor(key: StorageKey) {
    super(`The key value ${key} does not exists.`);
  }
}
