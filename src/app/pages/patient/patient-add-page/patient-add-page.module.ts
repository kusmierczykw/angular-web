import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientAddPageRoutingModule } from './patient-add-page-routing.module';
import { PatientAddPageComponent } from './patient-add-page.component';

@NgModule({
  declarations: [PatientAddPageComponent],
  imports: [CommonModule, PatientAddPageRoutingModule],
})
export class PatientAddPageModule {}
