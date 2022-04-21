import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list.component';
import { QuickTableRendererModule } from '@shared/tables/components/quick-table-renderer/quick-table-renderer.module';

@NgModule({
  declarations: [PatientsListComponent],
  imports: [CommonModule, QuickTableRendererModule],
})
export class PatientsListModule {}
