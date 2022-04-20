import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickTableRendererComponent } from './quick-table-renderer.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [QuickTableRendererComponent],
  imports: [CommonModule, MatTableModule],
})
export class QuickTableRendererModule {}
