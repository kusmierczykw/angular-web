import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankLayoutModule } from '@layouts/blank';
import { DashboardModule } from '@layouts/dashboard';

@NgModule({
  declarations: [],
  imports: [CommonModule, BlankLayoutModule, DashboardModule],
  exports: [BlankLayoutModule, DashboardModule],
})
export class LayoutsModule {}
