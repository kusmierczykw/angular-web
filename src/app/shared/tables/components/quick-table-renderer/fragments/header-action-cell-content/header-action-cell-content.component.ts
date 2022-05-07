import { Component, Input, ViewChild } from '@angular/core';
import { Icon } from '@shared/icons/enums/icon';
import { SimpleOverlayComponent } from '@shared/overlays/components/simple-overlay/simple-overlay.component';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';

@Component({
  selector: 'app-header-action-cell-content',
  templateUrl: './header-action-cell-content.component.html',
  styleUrls: ['./header-action-cell-content.component.scss'],
})
export class HeaderActionCellContentComponent<Key> {
  @Input() public columns!: TableColumn<Key>[];

  @ViewChild(SimpleOverlayComponent)
  public simpleOverlay!: SimpleOverlayComponent;

  public readonly Icon = Icon;

  public handleToggleClick(): void {
    this.simpleOverlay.toggle();
  }
}
