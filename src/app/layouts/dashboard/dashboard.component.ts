import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  DashboardHeaderMenuService,
  DashboardSidebarMenuService,
} from '@layouts/dashboard/services';
import { TitleService } from '@features/title/services';
import { Title } from '@features/title/models';
import { DashboardHeaderMenuProviderService } from '@layouts/dashboard/providers/dashboard-header-menu-provider.service';
import { DashboardSidebarMenuProviderService } from '@layouts/dashboard/providers/dashboard-sidebar-menu-provider.service';
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  startWith,
  Subject,
  switchMapTo,
  takeUntil,
  tap,
} from 'rxjs';
import { Breadcrumb } from '@shared/breadcrumbs/models';
import { NavigationEnd, Router } from '@angular/router';
import { BreadcrumbsProviderService } from '@shared/breadcrumbs/providers';
import { ScrollTopService } from '@core/routing/services/scroll-top.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TitleService],
})
export class DashboardComponent implements OnInit, OnDestroy {
  public breadcrumbs$!: Observable<Breadcrumb[]>;

  private readonly destroy$ = new Subject<void>();
  private readonly breadcrumbsSource$ = new BehaviorSubject<Breadcrumb[]>([]);

  public constructor(
    private readonly headerMenuProvider: DashboardHeaderMenuProviderService,
    private readonly sidebarMenuProvider: DashboardSidebarMenuProviderService,
    private readonly breadcrumbsProvider: BreadcrumbsProviderService,
    private readonly sidebarMenuService: DashboardSidebarMenuService,
    private readonly headerMenuService: DashboardHeaderMenuService,
    private readonly scrollTopService: ScrollTopService,
    private readonly titleService: TitleService,
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {
    this.registerHeaderMenu();
    this.registerSidebarMenu();
    this.registerTitle();
    this.registerScrollTopOnNavigate();
    this.configureBreadcrumbsSource();
  }

  public ngOnDestroy() {
    this.destroy();
  }

  private destroy(): void {
    this.destroy$.next();
  }

  private registerHeaderMenu(): void {
    this.headerMenuService.register(this.headerMenuProvider.getMenu());
  }

  private registerSidebarMenu(): void {
    this.sidebarMenuService.register(this.sidebarMenuProvider.getMenu());
    this.sidebarMenuService.registerAccountMenu(
      this.sidebarMenuProvider.getAccountMenu(),
    );
  }

  private registerTitle(): void {
    this.titleService.setTitle(new Title('Miłego dnia, Wojciech!'));
  }

  private registerScrollTopOnNavigate(): void {
    this.scrollTopService.scrollTopOnNavigate();
  }

  private configureBreadcrumbsSource(): void {
    this.breadcrumbs$ = this.breadcrumbsSource();
  }

  private breadcrumbsSource(): Observable<Breadcrumb[]> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntil(this.destroy$),
      map(() => this.breadcrumbsProvider.buildFromActivatedRoute()),
      tap((breadcrumbs) => this.breadcrumbsSource$.next(breadcrumbs)),
      switchMapTo(this.breadcrumbsSource$.asObservable()),
      startWith(this.breadcrumbsProvider.buildFromActivatedRoute()),
    );
  }
}
