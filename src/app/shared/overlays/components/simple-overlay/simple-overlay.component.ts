import { Component, Input } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';

@Component({
  selector: 'app-simple-overlay',
  templateUrl: './simple-overlay.component.html',
  styleUrls: ['./simple-overlay.component.scss'],
})
export class SimpleOverlayComponent {
  @Input() public overlayOrigin!: CdkOverlayOrigin;

  public isOpen = false;

  public handleOverlayOutsideClick(): void {
    this.close();
  }

  public show(): void {
    this.isOpen = true;
  }

  public close(): void {
    this.isOpen = false;
  }

  public toggle(): void {
    this.isOpen ? this.close() : this.show();
  }
}
