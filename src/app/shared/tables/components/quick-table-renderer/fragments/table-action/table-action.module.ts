import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionComponent } from './table-action.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@core/icons/icons.module';

@NgModule({
  declarations: [TableActionComponent],
  imports: [CommonModule, RouterModule, IconsModule],
  exports: [TableActionComponent],
})
export class TableActionModule {}
