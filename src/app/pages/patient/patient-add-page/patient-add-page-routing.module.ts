import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteData } from '@core/routing/data';
import { PatientAddPageComponent } from './patient-add-page.component';

const routes: Routes = [
  {
    path: '',
    component: PatientAddPageComponent,
    data: {
      [RouteData.BREADCRUMB]: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientAddPageRoutingModule {}
