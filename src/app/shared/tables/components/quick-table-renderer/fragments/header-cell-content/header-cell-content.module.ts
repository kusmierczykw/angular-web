import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCellContentComponent } from './header-cell-content.component';
import { HeaderActionCellContentModule } from '@shared/tables/components/quick-table-renderer/fragments/header-action-cell-content/header-action-cell-content.module';

@NgModule({
  declarations: [HeaderCellContentComponent],
  exports: [HeaderCellContentComponent],
  imports: [CommonModule, HeaderActionCellContentModule],
})
export class HeaderCellContentModule {}
