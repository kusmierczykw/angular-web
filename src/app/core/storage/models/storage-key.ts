export class StorageKey {
  public constructor(private readonly key: string) {}

  public toString(): string {
    return this.key;
  }
}
