import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderActionOverlayComponent } from './header-action-overlay.component';
import { MatButtonModule } from '@angular/material/button';
import { IconsModule } from '@core/icons/icons.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayPanelModule } from '@shared/overlay-panel/overlay-panel.module';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [HeaderActionOverlayComponent],
  exports: [HeaderActionOverlayComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    IconsModule,
    MatTooltipModule,
    OverlayPanelModule,
    OverlayModule,
  ],
})
export class HeaderActionOverlayModule {}
