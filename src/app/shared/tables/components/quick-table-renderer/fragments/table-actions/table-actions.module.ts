import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionsComponent } from './table-actions.component';
import { TableActionModule } from '@shared/tables/components/quick-table-renderer/fragments/table-action/table-action.module';

@NgModule({
  declarations: [TableActionsComponent],
  imports: [CommonModule, TableActionModule],
  exports: [TableActionsComponent],
})
export class TableActionsModule {}
