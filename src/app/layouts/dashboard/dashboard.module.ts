import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@shared/icons/icon.module';
import { MatButtonModule } from '@angular/material/button';
import { MenuModule } from '@shared/menu/menu.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImagesModule } from '@shared/images/images.module';
import { BreadcrumbsModule } from '@shared/breadcrumbs/components/breadcrumbs/breadcrumbs.module';
import { DashboardHeaderComponent } from '@layouts/dashboard/fragments/dashboard-header/dashboard-header.component';
import { DashboardSidebarToggleComponent } from '@layouts/dashboard/fragments/dashboard-sidebar-toggle/dashboard-sidebar-toggle.component';
import { DashboardFooterComponent } from '@layouts/dashboard/fragments/dashboard-footer/dashboard-footer.component';
import { DashboardSidebarComponent } from '@layouts/dashboard/fragments/dashboard-sidebar/dashboard-sidebar.component';
import { UserAvatarModule } from '@modules/avatar/components/user-avatar/user-avatar.module';
import { TitleModule } from '@modules/title/components/title/title.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    DashboardFooterComponent,
    DashboardSidebarToggleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    MatButtonModule,
    MenuModule,
    UserAvatarModule,
    MatIconModule,
    MatTooltipModule,
    ImagesModule,
    TitleModule,
    BreadcrumbsModule,
  ],
})
export class DashboardModule {}
