import { Injectable } from '@angular/core';
import { Image } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class ImageUrlProviderService {
  private imageUrls: Record<Image, string> = {
    [Image.UNDRAW_STABILITY_BALL]: 'assets/images/undraw_stability_ball.svg',
    [Image.UNDRAW_WORKING_OUT]: 'assets/images/undraw_working_out.svg',
  };

  public getUrl(image: Image): string {
    return this.imageUrls[image];
  }
}
