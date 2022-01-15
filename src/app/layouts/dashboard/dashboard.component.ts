import { Component, OnInit } from '@angular/core';
import {
  DashboardHeaderMenuService,
  DashboardSidebarMenuService,
} from '@layouts/dashboard/services';
import { TitleService } from '@features/title/services';
import { Title } from '@features/title/models';
import { DashboardHeaderMenuProviderService } from '@layouts/dashboard/providers/dashboard-header-menu-provider.service';
import { DashboardSidebarMenuProviderService } from '@layouts/dashboard/providers/dashboard-sidebar-menu-provider.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [TitleService],
})
export class DashboardComponent implements OnInit {
  public constructor(
    private readonly headerMenuProvider: DashboardHeaderMenuProviderService,
    private readonly sidebarMenuProvider: DashboardSidebarMenuProviderService,
    private readonly sidebarMenuService: DashboardSidebarMenuService,
    private readonly headerMenuService: DashboardHeaderMenuService,
    private readonly titleService: TitleService,
  ) {}

  public ngOnInit(): void {
    this.registerHeaderMenu();
    this.registerSidebarMenu();
    this.registerTitle();
  }

  private registerHeaderMenu(): void {
    this.headerMenuService.register(this.headerMenuProvider.getMenu());
  }

  private registerSidebarMenu(): void {
    this.sidebarMenuService.register(this.sidebarMenuProvider.getMenu());
  }

  private registerTitle(): void {
    this.titleService.setTitle(new Title('Miłego dnia, Wojciech!'));
  }
}
