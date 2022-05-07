import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionComponent } from './table-action.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@shared/icons/icon.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableActionRouterLinkPipe } from './pipes/table-action-router-link.pipe';
import { OnlyVisibleActionsPipe } from '@shared/tables/components/quick-table-renderer/fragments/table-action/pipes/only-visible-actions.pipe';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    TableActionComponent,
    TableActionRouterLinkPipe,
    OnlyVisibleActionsPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  exports: [TableActionComponent, OnlyVisibleActionsPipe],
})
export class TableActionModule {}
