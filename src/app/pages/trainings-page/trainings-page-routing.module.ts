import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsPageComponent } from '@pages/trainings-page/trainings-page.component';
import { RouteData } from '@core/routing/data/route-data';

const routes: Routes = [
  {
    path: '',
    component: TrainingsPageComponent,
    data: {
      [RouteData.BREADCRUMB]: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingsPageRoutingModule {}
