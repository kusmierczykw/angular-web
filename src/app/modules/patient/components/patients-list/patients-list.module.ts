import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list.component';
import { QuickTableRendererModule } from '@shared/tables/components/quick-table-renderer/quick-table-renderer.module';
import { PatientsListCellContentRendererComponent } from './fragments/patients-list-cell-content-renderer/patients-list-cell-content-renderer.component';
import { PatientStatusModule } from '@modules/patient/components/patient-status/patient-status.module';

@NgModule({
  declarations: [
    PatientsListComponent,
    PatientsListCellContentRendererComponent,
  ],
  imports: [CommonModule, QuickTableRendererModule, PatientStatusModule],
  exports: [PatientsListComponent],
})
export class PatientsListModule {}
