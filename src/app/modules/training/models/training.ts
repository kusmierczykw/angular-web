export class Training {
  public constructor(
    public readonly name: string,
    public readonly startedAt: Date,
    public readonly finishedAt: Date,
    public readonly group: string,
    public readonly quantity: number,
  ) {}
}
