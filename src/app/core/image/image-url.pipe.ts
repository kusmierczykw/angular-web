import { Pipe, PipeTransform } from '@angular/core';
import { Image } from './image.enum';
import { ImageUrlProviderService } from './image-url-provider.service';

@Pipe({
  name: 'imageUrl',
})
export class ImageUrlPipe implements PipeTransform {
  public constructor(
    private readonly imageUrlProvider: ImageUrlProviderService,
  ) {}

  public transform(image: Image): string {
    return this.imageUrlProvider.getUrl(image);
  }
}
