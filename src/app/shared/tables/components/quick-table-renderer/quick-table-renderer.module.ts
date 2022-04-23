import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickTableRendererComponent } from './quick-table-renderer.component';
import { MatTableModule } from '@angular/material/table';
import { OnlyVisibleColumnsPipe } from './pipes/only-visible-columns.pipe';
import { ColumnKeysPipe } from './pipes/column-keys.pipe';
import { CellContentModule } from '@shared/tables/components/quick-table-renderer/fragments/cell-content/cell-content.module';

@NgModule({
  declarations: [
    QuickTableRendererComponent,
    OnlyVisibleColumnsPipe,
    ColumnKeysPipe,
  ],
  imports: [CommonModule, MatTableModule, CellContentModule],
  exports: [QuickTableRendererComponent],
})
export class QuickTableRendererModule {}
