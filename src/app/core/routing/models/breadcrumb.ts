export class Breadcrumb {
  public constructor(
    public readonly label: string,
    public readonly routerLink: string[],
  ) {}
}
