import { Injectable } from '@angular/core';
import { MenuItem } from '@shared/menu/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardSidebarMenuService {
  public menu$: Observable<MenuItem[]>;

  private menuSource$: BehaviorSubject<MenuItem[]> = new BehaviorSubject<
    MenuItem[]
  >([]);

  public constructor() {
    this.menu$ = this.menuSource$.asObservable();
  }

  public register(menu: MenuItem[]): void {
    this.menuSource$.next(menu);
  }
}
