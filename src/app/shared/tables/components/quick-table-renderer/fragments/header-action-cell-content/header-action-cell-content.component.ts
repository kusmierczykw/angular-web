import { Component, Input, ViewChild } from '@angular/core';
import { Icon } from '@shared/icons/enums/icon';
import { SimpleOverlayComponent } from '@shared/overlays/components/simple-overlay/simple-overlay.component';
import { Nullish } from '@utils/types/nullish';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';

@Component({
  selector: 'app-header-action-cell-content',
  templateUrl: './header-action-cell-content.component.html',
  styleUrls: ['./header-action-cell-content.component.scss'],
})
export class HeaderActionCellContentComponent<Key> {
  @Input() public columns: Nullish<TableColumns<Key>>;

  @ViewChild(SimpleOverlayComponent)
  public simpleOverlay!: SimpleOverlayComponent;

  public readonly Icon = Icon;

  public handleToggleClick(): void {
    this.simpleOverlay.toggle();
  }
}
