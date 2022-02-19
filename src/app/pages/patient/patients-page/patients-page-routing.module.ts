import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsPageComponent } from './patients-page.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsPageRoutingModule {}
