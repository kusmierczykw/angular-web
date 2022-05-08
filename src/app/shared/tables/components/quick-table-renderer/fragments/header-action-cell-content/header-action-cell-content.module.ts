import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderActionCellContentComponent } from './header-action-cell-content.component';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@shared/icons/icon.module';
import { SimpleOverlayModule } from '@shared/overlays/components/simple-overlay/simple-overlay.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { ColumnsSelectListModule } from '@shared/tables/components/quick-table-renderer/fragments/columns-select-list/columns-select-list.module';
import { ColumnsPipeModule } from '@shared/tables/components/quick-table-renderer/pipes/columns/columns-pipe.module';

@NgModule({
  declarations: [HeaderActionCellContentComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    IconModule,
    SimpleOverlayModule,
    OverlayModule,
    ColumnsSelectListModule,
    ColumnsPipeModule,
  ],
  exports: [HeaderActionCellContentComponent],
})
export class HeaderActionCellContentModule {}
