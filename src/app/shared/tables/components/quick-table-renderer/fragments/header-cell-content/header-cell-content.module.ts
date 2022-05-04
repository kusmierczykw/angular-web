import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCellContentComponent } from './header-cell-content.component';
import { HeaderActionOverlayModule } from '@shared/tables/components/quick-table-renderer/fragments/header-action-overlay/header-action-overlay.module';

@NgModule({
  declarations: [HeaderCellContentComponent],
  exports: [HeaderCellContentComponent],
  imports: [CommonModule, HeaderActionOverlayModule],
})
export class HeaderCellContentModule {}
