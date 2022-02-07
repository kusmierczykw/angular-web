import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from '@shared/menu/models';

@Injectable({
  providedIn: 'root',
})
export class DashboardSidebarMenuService {
  public readonly menu$: Observable<MenuItem[]>;
  public readonly accountMenu$: Observable<MenuItem[]>;

  private menuSource$ = new BehaviorSubject<MenuItem[]>([]);
  private accountMenuSource$ = new BehaviorSubject<MenuItem[]>([]);

  public constructor() {
    this.menu$ = this.menuSource$.asObservable();
    this.accountMenu$ = this.accountMenuSource$.asObservable();
  }

  public register(items: MenuItem[]): void {
    this.menuSource$.next(items);
  }

  public registerAccountMenu(items: MenuItem[]): void {
    this.accountMenuSource$.next(items);
  }
}
