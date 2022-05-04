import { Component, Input } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { Icon } from '@core/icons/enums/icon';

@Component({
  selector: 'app-header-action-overlay',
  templateUrl: './header-action-overlay.component.html',
  styleUrls: ['./header-action-overlay.component.scss'],
})
export class HeaderActionOverlayComponent<ColumnKey> {
  @Input() public columns!: TableColumn<ColumnKey>[];

  public readonly Icon = Icon;
}
