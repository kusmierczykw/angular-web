import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';
import { ValuesSubstitutionProviderService } from '@shared/values-substitution/providers/values-substitution-provider.service';
import { toObservable } from '@utils/rxjs/operators/to-observable';

@Component({
  selector: 'app-patient-details-page',
  templateUrl: './patient-details-page.component.html',
  styleUrls: ['./patient-details-page.component.scss'],
  standalone: true,
})
export class PatientDetailsPageComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly valuesSubstitutionProvider: ValuesSubstitutionProviderService,
  ) {}

  public ngOnInit(): void {
    this.applyBreadcrumbVariables();
  }

  public ngOnDestroy(): void {
    this.resolveBreadcrumbsVariables();
  }

  private applyBreadcrumbVariables(): void {
    this.valuesSubstitutionProvider.apply(
      RouteBreadcrumbVariable.FIRST_NAME,
      () => toObservable('Wojciech'),
    );
    this.valuesSubstitutionProvider.apply(
      RouteBreadcrumbVariable.LAST_NAME,
      () => toObservable('Kuśmierczyk'),
    );
  }

  private resolveBreadcrumbsVariables(): void {
    this.valuesSubstitutionProvider.resolve(RouteBreadcrumbVariable.FIRST_NAME);
    this.valuesSubstitutionProvider.resolve(RouteBreadcrumbVariable.LAST_NAME);
  }
}
