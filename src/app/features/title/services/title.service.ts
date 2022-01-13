import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Title } from '@features/title/models/title';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  public title$!: Observable<Title>;

  private readonly titleSource$ = new ReplaySubject<Title>(1);

  public constructor() {
    this.title$ = this.titleSource$.asObservable();
  }

  public setTitle(title: Title): void {
    this.titleSource$.next(title);
  }
}
