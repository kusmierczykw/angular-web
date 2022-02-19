import { Component, OnDestroy, OnInit } from '@angular/core';
import { TextValueProviderService } from '@shared/text-variables/services/text-value-provider.service';
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
    this.initializeBreadcrumbVariables();
  }

  public ngOnDestroy(): void {
    this.freeBreadcrumbsVariables();
  }

  private initializeBreadcrumbVariables(): void {
    this.textValueProvider.setValueFor(RouteBreadcrumbVariable.FIRST_NAME, () =>
      toObservable('Wojciech'),
    );
    this.textValueProvider.setValueFor(RouteBreadcrumbVariable.LAST_NAME, () =>
      toObservable('Kuśmierczyk'),
    );
  }

  private freeBreadcrumbsVariables(): void {
    this.textValueProvider.clearValueFor(RouteBreadcrumbVariable.FIRST_NAME);
    this.textValueProvider.clearValueFor(RouteBreadcrumbVariable.LAST_NAME);
  }
}
