export class SelectOption<Value = unknown> {
  public constructor(
    public readonly label: string,
    public readonly value: Value,
  ) {}
}
