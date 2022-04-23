import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCellContentComponent } from './header-cell-content.component';

@NgModule({
  declarations: [HeaderCellContentComponent],
  exports: [HeaderCellContentComponent],
  imports: [CommonModule],
})
export class HeaderCellContentModule {}
