import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickTableRendererComponent } from './quick-table-renderer.component';
import { MatTableModule } from '@angular/material/table';
import { CellContentModule } from '@shared/tables/components/quick-table-renderer/fragments/cell-content/cell-content.module';
import { HeaderCellContentModule } from '@shared/tables/components/quick-table-renderer/fragments/header-cell-content/header-cell-content.module';
import { ColumnsPipeModule } from '@shared/tables/components/quick-table-renderer/pipes/columns/columns-pipe.module';

@NgModule({
  declarations: [QuickTableRendererComponent],
  imports: [
    CommonModule,
    MatTableModule,
    CellContentModule,
    HeaderCellContentModule,
    ColumnsPipeModule,
  ],
  exports: [QuickTableRendererComponent],
})
export class QuickTableRendererModule {}
