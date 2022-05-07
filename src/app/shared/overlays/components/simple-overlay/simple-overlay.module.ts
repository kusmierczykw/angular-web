import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleOverlayComponent } from './simple-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [SimpleOverlayComponent],
  exports: [SimpleOverlayComponent],
  imports: [CommonModule, OverlayModule],
})
export class SimpleOverlayModule {}
