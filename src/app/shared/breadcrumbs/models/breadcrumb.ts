import { RouterLink } from '@core/routing/types';

export class Breadcrumb {
  public constructor(
    public readonly label: string,
    public readonly routerLink: RouterLink,
  ) {}
}
