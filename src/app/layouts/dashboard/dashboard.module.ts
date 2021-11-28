import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import {
  DashboardHeaderComponent,
  DashboardSidebarComponent,
} from '@layouts/dashboard/fragments';
import { IconsModule } from '@core/icons/icons.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
  ],
  imports: [CommonModule, RouterModule, IconsModule, MatButtonModule],
})
export class DashboardModule {}
