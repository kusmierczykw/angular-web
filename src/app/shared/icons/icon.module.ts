import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconClassPipe } from '@shared/icons/pipes/icon-class.pipe';
import { IconComponent } from './icon.component';

@NgModule({
  declarations: [IconClassPipe, IconComponent],
  imports: [CommonModule],
  exports: [IconClassPipe, IconComponent],
})
export class IconModule {}
