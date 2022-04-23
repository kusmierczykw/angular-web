import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellContentComponent } from './cell-content.component';
import { TableActionsModule } from '@shared/tables/components/quick-table-renderer/fragments/table-actions/table-actions.module';

@NgModule({
  declarations: [CellContentComponent],
  exports: [CellContentComponent],
  imports: [CommonModule, TableActionsModule],
})
export class CellContentModule {}
