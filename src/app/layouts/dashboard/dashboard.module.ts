import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import {
  DashboardFooterComponent,
  DashboardHeaderComponent,
  DashboardSidebarComponent,
} from '@layouts/dashboard/fragments';
import { IconsModule } from '@core/icons/icons.module';
import { MatButtonModule } from '@angular/material/button';
import { MenuModule } from '@shared/menu/menu.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    DashboardFooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    MatButtonModule,
    MenuModule,
  ],
})
export class DashboardModule {}
