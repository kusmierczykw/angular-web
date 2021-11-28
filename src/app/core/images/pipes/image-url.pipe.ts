import { Pipe, PipeTransform } from '@angular/core';
import { ImageUrlProviderService } from '@core/images/providers';
import { Image } from '@core/images/enums';

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
