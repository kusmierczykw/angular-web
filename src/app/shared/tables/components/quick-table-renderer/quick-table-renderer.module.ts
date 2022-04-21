import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickTableRendererComponent } from './quick-table-renderer.component';
import { MatTableModule } from '@angular/material/table';
import { OnlyVisibleColumnsPipe } from './pipes/only-visible-columns.pipe';
import { ColumnKeysPipe } from './pipes/column-keys.pipe';

@NgModule({
  declarations: [
    QuickTableRendererComponent,
    OnlyVisibleColumnsPipe,
    ColumnKeysPipe,
  ],
  imports: [CommonModule, MatTableModule],
  exports: [QuickTableRendererComponent],
})
export class QuickTableRendererModule {}
