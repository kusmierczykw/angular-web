import { RouterLink } from '@core/routing/types/router-link';
import { Icon } from '@core/icons/enums';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { Observable } from 'rxjs';
import { RouterLinkActiveOptions } from '@shared/menu/types/router-link-active.options';

export class MenuItem {
  public constructor(
    public readonly theme: ThemePalette,
    public readonly visibility$: Observable<boolean>,
    public readonly routerLinkActiveOptions: RouterLinkActiveOptions,
    public readonly routerLink?: RouterLink,
    public readonly label?: string,
    public readonly icon?: Icon,
    public readonly command?: () => void,
    public readonly tooltip?: string,
    public readonly ripple?: boolean,
  ) {}
}
