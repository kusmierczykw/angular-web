import { RouterLink } from '@core/routing/types/router-link';
import { Icon } from '@core/icons/enums';

export class MenuItemModel {
  public constructor(
    public readonly routerLink: RouterLink,
    public readonly label?: string,
    public readonly icon?: Icon,
  ) {}
}
