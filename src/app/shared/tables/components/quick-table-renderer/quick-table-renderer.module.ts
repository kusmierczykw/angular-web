import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickTableRendererComponent } from './quick-table-renderer.component';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { ColumnsSelectListComponent } from '@shared/tables/components/quick-table-renderer/fragments/columns-select-list/columns-select-list.component';
import { OnlyVisibleColumnsPipe } from '@shared/tables/components/quick-table-renderer/pipes/only-visible-columns.pipe';
import { ColumnKeysPipe } from '@shared/tables/components/quick-table-renderer/pipes/column-keys.pipe';
import { ColumnWidthPipe } from '@shared/tables/components/quick-table-renderer/pipes/column-width.pipe';
import { OnlyVisibilityColumnsPipe } from '@shared/tables/components/quick-table-renderer/pipes/only-visibility-columns.pipe';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@shared/icons/icon.module';
import { SimpleOverlayModule } from '@shared/overlays/components/simple-overlay/simple-overlay.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { HeaderActionCellContentComponent } from '@shared/tables/components/quick-table-renderer/fragments/header-action-cell-content/header-action-cell-content.component';
import { HeaderCellContentComponent } from '@shared/tables/components/quick-table-renderer/fragments/header-cell-content/header-cell-content.component';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { TableActionComponent } from '@shared/tables/components/quick-table-renderer/fragments/table-action/table-action.component';
import { OnlyVisibleActionsPipe } from '@shared/tables/components/quick-table-renderer/pipes/only-visible-actions.pipe';
import { BooleanModule } from '@shared/booleans/components/boolean/boolean.module';
import { TableActionsComponent } from '@shared/tables/components/quick-table-renderer/fragments/table-actions/table-actions.component';
import { CellContentComponent } from '@shared/tables/components/quick-table-renderer/fragments/cell-content/cell-content.component';
import { TableActionRouterLinkPipe } from '@shared/tables/components/quick-table-renderer/pipes/table-action-router-link.pipe';

@NgModule({
  declarations: [
    CellContentComponent,
    ColumnsSelectListComponent,
    ColumnKeysPipe,
    ColumnWidthPipe,
    HeaderActionCellContentComponent,
    HeaderCellContentComponent,
    OnlyVisibleActionsPipe,
    OnlyVisibleColumnsPipe,
    OnlyVisibilityColumnsPipe,
    TableActionComponent,
    TableActionsComponent,
    TableActionRouterLinkPipe,
    QuickTableRendererComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatListModule,
    SimpleOverlayModule,
    OverlayModule,
    RouterModule,
    IconModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    BooleanModule,
  ],
  exports: [QuickTableRendererComponent],
})
export class QuickTableRendererModule {}
