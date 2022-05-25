import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Nil } from '@utils/types/nil';
import { RouteData } from '@core/routing/data/route-data';
import { isString } from '@utils/is-string';

@Injectable({
  providedIn: 'root',
})
export class ActivatedRouteHelperService {
  public breadcrumbFromSnapshot(snapshot: ActivatedRouteSnapshot): Nil<string> {
    const result = this.dataFromSnapshot(snapshot, RouteData.BREADCRUMB);

    if (isString(result)) {
      return result;
    }

    return;
  }

  public dataFromSnapshot<T>(
    snapshot: ActivatedRouteSnapshot,
    dataKey: RouteData,
  ): Nil<T> {
    return snapshot.data[dataKey];
  }
}
