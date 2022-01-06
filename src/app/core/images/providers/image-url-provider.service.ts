import { Injectable } from '@angular/core';
import { Image } from '../enums';

@Injectable({
  providedIn: 'root',
})
export class ImageUrlProviderService {
  private imageUrls: Record<Image, string> = {
    [Image.UNDRAW_STABILITY_BALL]: 'assets/images/undraw_stability_ball.svg',
    [Image.UNDRAW_WORKING_OUT]: 'assets/images/undraw_working_out.svg',
    [Image.UNDRAW_EXPLORING]: 'assets/images/undraw_exploring.svg',
    [Image.UNDRAW_NOT_FOUND]: 'assets/images/undraw_not_found.svg',
    [Image.UNDRAW_HEALTHY_LIFESTYLE]:
      'assets/images/undraw_healthy_lifestyle.svg',
    [Image.FITNESS_LOGO]: 'assets/images/fitness-logo.png',
  };

  public getUrl(image: Image): string {
    return this.imageUrls[image];
  }
}
