import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayPanelComponent } from './overlay-panel.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [OverlayPanelComponent],
  imports: [CommonModule, OverlayModule],
  exports: [OverlayPanelComponent],
})
export class OverlayPanelModule {}
