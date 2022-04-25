import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellContentComponent } from './cell-content.component';
import { TableActionsModule } from '@shared/tables/components/quick-table-renderer/fragments/table-actions/table-actions.module';
import { BooleanModule } from '@shared/booleans/components/boolean/boolean.module';

@NgModule({
  declarations: [CellContentComponent],
  exports: [CellContentComponent],
  imports: [CommonModule, TableActionsModule, BooleanModule],
})
export class CellContentModule {}
