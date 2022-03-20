import { Component, OnInit } from '@angular/core';
import { DashboardHeaderMenuProviderService } from '@layouts/dashboard/providers/dashboard-header-menu-provider.service';
import { DashboardSidebarMenuProviderService } from '@layouts/dashboard/providers/dashboard-sidebar-menu-provider.service';
import { filter, map, Observable, startWith } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollTopService } from '@core/routing/services/scroll-top.service';
import { TitleService } from '@features/title/services/title.service';
import { Breadcrumb } from '@shared/breadcrumbs/models/breadcrumb';
import { BreadcrumbsProviderService } from '@shared/breadcrumbs/providers/breadcrumbs-provider.service';
import { DashboardSidebarMenuService } from '@layouts/dashboard/services/dashboard-sidebar-menu.service';
import { DashboardHeaderMenuService } from '@layouts/dashboard/services/dashboard-header-menu.service';
import { Title } from '@features/title/models/title';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TitleService],
})
export class DashboardComponent implements OnInit {
  public breadcrumbs$!: Observable<Breadcrumb[]>;

  public constructor(
    private readonly headerMenuProvider: DashboardHeaderMenuProviderService,
    private readonly sidebarMenuProvider: DashboardSidebarMenuProviderService,
    private readonly breadcrumbsProvider: BreadcrumbsProviderService,
    private readonly sidebarMenu: DashboardSidebarMenuService,
    private readonly headerMenu: DashboardHeaderMenuService,
    private readonly scrollTop: ScrollTopService,
    private readonly title: TitleService,
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {
    this.registerHeaderMenu();
    this.registerSidebarMenu();
    this.registerTitle();
    this.registerScrollTopOnNavigate();
    this.configureBreadcrumbsSource();
  }

  private registerHeaderMenu(): void {
    this.headerMenu.register(this.headerMenuProvider.getMenu());
  }

  private registerSidebarMenu(): void {
    this.sidebarMenu.register(this.sidebarMenuProvider.getMenu());
    this.sidebarMenu.registerAccountMenu(
      this.sidebarMenuProvider.getAccountMenu(),
    );
  }

  private registerTitle(): void {
    this.title.setTitle(new Title('Miłego dnia, Wojciech!'));
  }

  private registerScrollTopOnNavigate(): void {
    this.scrollTop.scrollTopOnNavigate();
  }

  private configureBreadcrumbsSource(): void {
    this.breadcrumbs$ = this.breadcrumbsSource();
  }

  private breadcrumbsSource(): Observable<Breadcrumb[]> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.breadcrumbsProvider.buildFromActivatedRoute()),
      startWith(this.breadcrumbsProvider.buildFromActivatedRoute()),
    );
  }
}
