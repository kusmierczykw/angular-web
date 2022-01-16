import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingAddPageComponent } from '@pages/training-add-page/training-add-page.component';
import { RouteData } from '@core/routing/data/route-data';

const routes: Routes = [
  {
    path: '',
    component: TrainingAddPageComponent,
    data: {
      [RouteData.BREADCRUMB]: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingAddPageRoutingModule {}
