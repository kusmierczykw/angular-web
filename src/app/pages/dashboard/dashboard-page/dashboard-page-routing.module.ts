import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from '@pages/dashboard/dashboard-page/dashboard-page.component';
import { RouteData } from '@core/routing/data/route-data';

const routes: Routes = [
  {
    path: '',
    component: DashboardPageComponent,
    data: {
      [RouteData.BREADCRUMB]: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
