import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUrlPipe } from '@core/images/pipes';

@NgModule({
  declarations: [ImageUrlPipe],
  imports: [CommonModule],
  exports: [ImageUrlPipe],
})
export class ImagesModule {}
