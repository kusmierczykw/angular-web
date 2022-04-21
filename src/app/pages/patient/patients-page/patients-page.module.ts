import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsPageRoutingModule } from './patients-page-routing.module';
import { PatientsPageComponent } from './patients-page.component';
import { PatientsListModule } from '@features/patient/components/patients-list/patients-list.module';

@NgModule({
  declarations: [PatientsPageComponent],
  imports: [CommonModule, PatientsPageRoutingModule, PatientsListModule],
})
export class PatientsPageModule {}
