import { RouterLink } from '@core/routing/types/router-link';

export class Breadcrumb {
  public constructor(
    public readonly label: string,
    public readonly routerLink: RouterLink,
  ) {}
}
