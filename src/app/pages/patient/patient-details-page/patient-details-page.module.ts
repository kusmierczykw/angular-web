import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsPageRoutingModule } from './patient-details-page-routing.module';
import { PatientDetailsPageComponent } from './patient-details-page.component';

@NgModule({
  declarations: [PatientDetailsPageComponent],
  imports: [CommonModule, PatientDetailsPageRoutingModule],
})
export class PatientDetailsPageModule {}
