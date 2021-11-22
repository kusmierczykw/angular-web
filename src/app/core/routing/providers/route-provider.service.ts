import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteProviderService {
  public constructor(private readonly router: Router) {}
}
