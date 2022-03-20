import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsPageComponent } from '@pages/patient/patient-details-page/patient-details-page.component';
import { RouteData } from '@core/routing/data/route-data';

const routes: Routes = [
  {
    path: '',
    component: PatientDetailsPageComponent,
    data: {
      [RouteData.BREADCRUMB]: null,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientDetailsPageRoutingModule {}
