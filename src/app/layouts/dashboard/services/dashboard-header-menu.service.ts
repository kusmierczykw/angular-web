import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItemModel } from '@shared/menu/models';

@Injectable({
  providedIn: 'root',
})
export class DashboardHeaderMenuService {
  public readonly menu$: Observable<MenuItemModel[]>;

  private readonly menuSource$: BehaviorSubject<MenuItemModel[]> =
    new BehaviorSubject<MenuItemModel[]>([]);

  public constructor() {
    this.menu$ = this.menuSource$.asObservable();
  }

  public register(menu: MenuItemModel[]): void {
    this.menuSource$.next(menu);
  }
}
