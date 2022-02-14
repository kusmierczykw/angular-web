import { Injectable } from '@angular/core';
import { Icon } from '@core/icons/enums';

@Injectable({
  providedIn: 'root',
})
export class IconClassProviderService {
  private iconUrls: Record<Icon, string> = {
    [Icon.ACTIVITY]: 'bi bi-activity',
    [Icon.BELL]: 'bi bi-bell-fill',
    [Icon.BOOK_HALF]: 'bi bi-book-half',
    [Icon.BOX_ARROW_LEFT]: 'bi bi-box-arrow-left',
    [Icon.BRICKS]: 'bi bi-bricks',
    [Icon.BUILDING]: 'bi bi-building',
    [Icon.CALENDAR]: 'bi bi-calendar',
    [Icon.CASH_COIN]: 'bi bi-cash-coin',
    [Icon.CREDIT_CARD]: 'bi-credit-card',
    [Icon.CHEVRON_RIGHT]: 'bi bi-chevron-right',
    [Icon.DASHBOARD]: 'bi bi-columns-gap',
    [Icon.GEAR_WIDE_CONNECTED]: 'bi bi-gear-wide-connected',
    [Icon.LAYOUT_SIDEBAR]: 'bi bi-layout-sidebar',
    [Icon.LAYOUT_SIDEBAR_REVERSE]: 'bi bi-layout-sidebar-reverse',
    [Icon.PEOPLE_FILL]: 'bi bi-people-fill',
    [Icon.RECORD]: 'bi bi-record',
    [Icon.RECORD_PARTIALLY_FILL]: 'bi bi-record2',
    [Icon.USERS]: 'bi bi-people',
  };

  public getClass(icon: Icon): string {
    return this.iconUrls[icon];
  }
}
