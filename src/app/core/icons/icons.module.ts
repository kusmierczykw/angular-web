import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconClassPipe } from '@core/icons/pipes/icon-class.pipe';

@NgModule({
  declarations: [IconClassPipe],
  imports: [CommonModule],
  exports: [IconClassPipe],
})
export class IconsModule {}
