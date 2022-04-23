import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionComponent } from './table-action.component';
import { RouterModule } from '@angular/router';
import { IconsModule } from '@core/icons/icons.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableActionRouterLinkPipe } from './pipes/table-action-router-link.pipe';

@NgModule({
  declarations: [TableActionComponent, TableActionRouterLinkPipe],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [TableActionComponent],
})
export class TableActionModule {}
