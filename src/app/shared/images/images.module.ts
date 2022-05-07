import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUrlPipe } from '@shared/images/pipes/image-url.pipe';

@NgModule({
  declarations: [ImageUrlPipe],
  imports: [CommonModule],
  exports: [ImageUrlPipe],
})
export class ImagesModule {}
