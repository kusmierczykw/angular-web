import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsSelectListComponent } from '@shared/tables/components/quick-table-renderer/fragments/columns-select-list/columns-select-list.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ColumnsSelectListComponent],
  imports: [CommonModule, MatListModule],
  exports: [ColumnsSelectListComponent],
})
export class ColumnsSelectListModule {}
