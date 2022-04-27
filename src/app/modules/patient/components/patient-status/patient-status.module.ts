import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientStatusLabelPipe } from './pipes/patient-status-label.pipe';
import { PatientStatusComponent } from './patient-status.component';
import { PatientStatusCssClassPipe } from './pipes/patient-status-css-class.pipe';

@NgModule({
  declarations: [
    PatientStatusLabelPipe,
    PatientStatusComponent,
    PatientStatusCssClassPipe,
  ],
  imports: [CommonModule],
  exports: [PatientStatusComponent],
})
export class PatientStatusModule {}
