import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconClassPipe } from '@core/icons/pipes';

@NgModule({
  declarations: [IconClassPipe],
  imports: [CommonModule],
  exports: [IconClassPipe],
})
export class IconsModule {}
