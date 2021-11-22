import { Pipe, PipeTransform } from '@angular/core';
import { ImageUrlProviderService } from '../providers/image-url-provider.service';
import { Image } from '@core/image/enums';

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
