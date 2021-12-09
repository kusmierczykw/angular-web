import { MenuItemModel } from '@shared/menu/models';
import { RouterLink } from '@core/routing/types/router-link';
import { Icon } from '@core/icons/enums';

export class MenuItemBuilder {
  public routerLink?: RouterLink;
  public label?: string;
  public icon?: Icon;
  public command?: () => void;
  public tooltip?: string;

  public setIcon(icon: Icon): this {
    this.icon = icon;

    return this;
  }

  public setTooltip(tooltip: string): this {
    this.tooltip = tooltip;

    return this;
  }

  public setLabel(label: string): this {
    this.label = label;

    return this;
  }

  public setCommand(command: () => void): this {
    this.command = command;

    return this;
  }

  public setRouterLink(routerLink: string[]): this {
    this.routerLink = routerLink;

    return this;
  }

  public build(): MenuItemModel {
    if (!this.label && !this.icon) {
      throw new Error('Label or icon must be set.');
    }

    if (!this.routerLink && !this.command) {
      throw new Error('Link or command must be set.');
    }

    const item: MenuItemModel = new MenuItemModel(this);

    this.reset();

    return item;
  }

  public reset(): this {
    this.routerLink = undefined;
    this.label = undefined;
    this.icon = undefined;
    this.command = undefined;
    this.tooltip = undefined;

    return this;
  }
}
