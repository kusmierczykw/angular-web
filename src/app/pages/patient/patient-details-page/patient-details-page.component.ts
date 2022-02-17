import { Component, OnInit } from '@angular/core';
import { BreadcrumbValueProviderService } from '@shared/breadcrumbs/components/breadcrumbs/services/breadcrumb-value-provider.service';
import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';
import { toObservable } from '@utils/rxjs/operators';

@Component({
  selector: 'app-patient-details-page',
  templateUrl: './patient-details-page.component.html',
  styleUrls: ['./patient-details-page.component.scss'],
})
export class PatientDetailsPageComponent implements OnInit {
  public constructor(
    private readonly breadcrumbValueProvider: BreadcrumbValueProviderService,
  ) {}

  public ngOnInit(): void {
    this.breadcrumbValueProvider.setValueFor(
      RouteBreadcrumbVariable.FIRST_NAME,
      () => toObservable('Wojciech'),
    );
    this.breadcrumbValueProvider.setValueFor(
      RouteBreadcrumbVariable.LAST_NAME,
      () => toObservable('Kuśmierczyk'),
    );
  }
}
