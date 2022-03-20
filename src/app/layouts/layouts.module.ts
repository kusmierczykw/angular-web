import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '@layouts/dashboard/dashboard.module';
import { BlankModule } from '@layouts/blank/blank.module';
import { AuthModule } from '@layouts/auth/auth.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlankModule, DashboardModule, AuthModule],
  exports: [BlankModule, DashboardModule],
})
export class LayoutsModule {}
