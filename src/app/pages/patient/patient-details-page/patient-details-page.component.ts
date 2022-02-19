import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextValueProviderService } from '@shared/text-variables/services';
import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';
import { toObservable } from '@utils/rxjs/operators';

@Component({
  selector: 'app-patient-details-page',
  templateUrl: './patient-details-page.component.html',
  styleUrls: ['./patient-details-page.component.scss'],
})
export class PatientDetailsPageComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly textValueProvider: TextValueProviderService,
  ) {}

  public ngOnInit(): void {
    this.registerBreadcrumbVariables();
  }

  public ngOnDestroy(): void {
    this.unregisterBreadcrumbsVariables();
  }

  private registerBreadcrumbVariables(): void {
    this.textValueProvider.registerValue(
      RouteBreadcrumbVariable.FIRST_NAME,
      () => toObservable('Wojciech'),
    );
    this.textValueProvider.registerValue(
      RouteBreadcrumbVariable.LAST_NAME,
      () => toObservable('Kuśmierczyk'),
    );
  }

  private unregisterBreadcrumbsVariables(): void {
    this.textValueProvider.unregisterValue(RouteBreadcrumbVariable.FIRST_NAME);
    this.textValueProvider.unregisterValue(RouteBreadcrumbVariable.LAST_NAME);
  }
}
