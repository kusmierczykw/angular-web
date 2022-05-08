import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyVisibleColumnsPipe } from '@shared/tables/components/quick-table-renderer/pipes/columns/only-visible-columns.pipe';
import { ColumnKeysPipe } from '@shared/tables/components/quick-table-renderer/pipes/columns/column-keys.pipe';
import { ColumnWidthPipe } from '@shared/tables/components/quick-table-renderer/pipes/columns/column-width.pipe';
import { OnlyVisibilityColumnsPipe } from '@shared/tables/components/quick-table-renderer/pipes/columns/only-visibility-columns.pipe';

@NgModule({
  declarations: [
    OnlyVisibleColumnsPipe,
    ColumnKeysPipe,
    ColumnWidthPipe,
    OnlyVisibilityColumnsPipe,
  ],
  imports: [CommonModule],
  exports: [
    OnlyVisibleColumnsPipe,
    ColumnKeysPipe,
    ColumnWidthPipe,
    OnlyVisibilityColumnsPipe,
  ],
})
export class ColumnsPipeModule {}
