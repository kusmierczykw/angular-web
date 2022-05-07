import { Injectable } from '@angular/core';
import { Image } from '@shared/images/enums/image';

@Injectable({
  providedIn: 'root',
})
export class ImageUrlProviderService {
  private imageUrls: Record<Image, string> = {
    [Image.UNDRAW_STABILITY_BALL]: 'assets/images/undraw_stability_ball.svg',
    [Image.UNDRAW_WORKING_OUT]: 'assets/images/undraw_working_out.svg',
    [Image.UNDRAW_EXPLORING]: 'assets/images/undraw_exploring.svg',
    [Image.UNDRAW_NOT_FOUND]: 'assets/images/undraw_not_found.svg',
    [Image.UNDRAW_TAKEN]: 'assets/images/undraw_taken.svg',
    [Image.UNDRAW_DESTINATIONS]: 'assets/images/undraw_destinations.svg',
    [Image.UNDRAW_TRAVEL_TOGETHER]: 'assets/images/undraw_travel_together.svg',
    [Image.UNDRAW_TRAVELING]: 'assets/images/undraw_traveling.svg',
    [Image.UNDRAW_HEALTHY_LIFESTYLE]:
      'assets/images/undraw_healthy_lifestyle.svg',
    [Image.EKZ_LOGO]: 'assets/images/ekz-logo.svg',
  };

  public getUrl(image: Image): string {
    return this.imageUrls[image];
  }
}
