import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import {
  DashboardFooterComponent,
  DashboardHeaderComponent,
  DashboardSidebarComponent,
  DashboardSidebarToggleComponent,
} from '@layouts/dashboard/fragments';
import { IconsModule } from '@core/icons/icons.module';
import { MatButtonModule } from '@angular/material/button';
import { MenuModule } from '@shared/menu/menu.module';
import { UserAvatarModule } from '@features/avatar/components/user-avatar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImagesModule } from '@core/images/images.module';
import { TitleModule } from '@features/title/components/title';

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
    IconsModule,
    MatButtonModule,
    MenuModule,
    UserAvatarModule,
    MatIconModule,
    MatTooltipModule,
    ImagesModule,
    TitleModule,
  ],
})
export class DashboardModule {}
