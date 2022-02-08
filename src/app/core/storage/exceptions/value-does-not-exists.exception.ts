import { StorageKey } from '@core/storage/models';

export class ValueDoesNotExistsException extends Error {
  public constructor(key: StorageKey) {
    super(`The key value ${key} does not exists.`);
  }
}
