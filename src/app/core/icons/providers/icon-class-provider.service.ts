import { Injectable } from '@angular/core';
import { Icon } from '@core/icons/enums';

@Injectable({
  providedIn: 'root',
})
export class IconClassProviderService {
  private iconUrls: Record<Icon, string> = {
    [Icon.BELL]: 'bi bi-bell-fill',
    [Icon.BUILDING]: 'bi bi-building',
    [Icon.CREDIT_CARD]: 'bi-credit-card',
    [Icon.USERS]: 'bi bi-people',
    [Icon.GEAR_WIDE_CONNECTED]: 'bi bi-gear-wide-connected',
    [Icon.RECORD]: 'bi bi-record',
    [Icon.RECORD_PARTIALLY_FILL]: 'bi bi-record2',
    [Icon.DASHBOARD]: 'bi bi-columns-gap',
    [Icon.CASH_COIN]: 'bi bi-cash-coin',
  };

  public getClass(icon: Icon): string {
    return this.iconUrls[icon];
  }
}
