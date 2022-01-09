import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardSidebarToggleService {
  public readonly toggle$: Observable<boolean>;

  private readonly toggleSource$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public constructor() {
    this.toggle$ = this.toggleSource$.asObservable();
  }

  public toggle(): void {
    const toggle: boolean = this.toggleSource$.getValue();

    this.toggleSource$.next(!toggle);
  }
}