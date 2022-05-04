import { Component, Input, OnInit } from '@angular/core';
import { CdkOverlayOrigin } from '@angular/cdk/overlay/overlay-directives';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-overlay-panel',
  templateUrl: './overlay-panel.component.html',
  styleUrls: ['./overlay-panel.component.scss'],
})
export class OverlayPanelComponent implements OnInit {
  @Input() public trigger!: CdkOverlayOrigin;

  public isOpen = false;

  public ngOnInit(): void {
    fromEvent(this.trigger.elementRef.nativeElement, 'click').subscribe(() =>
      this.toggle(),
    );
  }

  public toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  public open(): void {
    this.isOpen = true;
  }

  public close(): void {
    this.isOpen = false;
  }

  public handleOutsideClick(): void {
    this.close();
  }
}
