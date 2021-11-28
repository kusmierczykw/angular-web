import { Injectable } from '@angular/core';
import { Icon } from '@core/icons/enums';

@Injectable({
  providedIn: 'root',
})
export class IconClassProviderService {
  private iconUrls: Record<Icon, string> = {
    [Icon.BELL]: 'bi bi-bell-fill',
  };

  public getClass(icon: Icon): string {
    return this.iconUrls[icon];
  }
}
