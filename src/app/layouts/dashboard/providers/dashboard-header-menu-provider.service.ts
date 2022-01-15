import { MenuItem } from '@shared/menu/models';
import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardHeaderMenuProviderService {
  public constructor(private readonly builder: MenuItemBuilder) {}

  public getMenu(): MenuItem[] {
    return [
      this.builder.setLabel('Wskazówki').setRouterLink([]).build(),
      this.builder.setLabel('Pomoc').setRouterLink([]).build(),
      this.builder.setLabel('Zgłoś błąd').setRouterLink([]).build(),
    ];
  }
}
