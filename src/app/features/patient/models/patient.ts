export class Patient {
  public constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly age: number,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly status: string,
    public readonly active: boolean,
  ) {}
}
