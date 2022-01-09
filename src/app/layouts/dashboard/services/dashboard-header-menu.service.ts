import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MenuItem } from '@shared/menu/models';

@Injectable({
  providedIn: 'root',
})
export class DashboardHeaderMenuService {
  public readonly menu$: Observable<MenuItem[]>;

  private readonly menuSource$: BehaviorSubject<MenuItem[]> =
    new BehaviorSubject<MenuItem[]>([]);

  public constructor() {
    this.menu$ = this.menuSource$.asObservable();
  }

  public register(menu: MenuItem[]): void {
    this.menuSource$.next(menu);
  }
}
