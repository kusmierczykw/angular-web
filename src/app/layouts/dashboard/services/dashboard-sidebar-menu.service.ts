import { Injectable } from '@angular/core';
import { MenuItemModel } from '@shared/menu/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardSidebarMenuService {
  public menu$: Observable<MenuItemModel[]>;

  private menuSource$: BehaviorSubject<MenuItemModel[]> = new BehaviorSubject<
    MenuItemModel[]
  >([]);

  public constructor() {
    this.menu$ = this.menuSource$.asObservable();
  }

  public register(menu: MenuItemModel[]): void {
    this.menuSource$.next(menu);
  }
}
