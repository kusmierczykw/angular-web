import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list.component';
import { QuickTableRendererModule } from '@shared/tables/components/quick-table-renderer/quick-table-renderer.module';
import { CustomCellContentRendererComponent } from './fragments/custom-cell-content-renderer/custom-cell-content-renderer.component';
import { PatientStatusModule } from '@modules/patient/components/patient-status/patient-status.module';

@NgModule({
  declarations: [PatientsListComponent, CustomCellContentRendererComponent],
  imports: [CommonModule, QuickTableRendererModule, PatientStatusModule],
  exports: [PatientsListComponent],
})
export class PatientsListModule {}
