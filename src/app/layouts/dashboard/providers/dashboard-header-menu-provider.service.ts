import { MenuItemBuilder } from '@shared/menu/builders/menu-item.builder';
import { Injectable } from '@angular/core';
import { MenuItem } from '@shared/menu/models/menu-item';

@Injectable({
  providedIn: 'root',
})
export class DashboardHeaderMenuProviderService {
  public constructor(private readonly builder: MenuItemBuilder) {}

  public getMenu(): MenuItem[] {
    return [
      this.builder.label('Wskazówki').routerLink([]).build(),
      this.builder.label('Pomoc').routerLink([]).build(),
      this.builder.label('Zgłoś błąd').routerLink([]).build(),
    ];
  }
}
