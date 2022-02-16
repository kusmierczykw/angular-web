import { Component, OnInit } from '@angular/core';
import { BreadcrumbVariableSubstituteService } from '@shared/breadcrumbs/components/breadcrumbs/services/breadcrumb-variable-substitute.service';
import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';

@Component({
  selector: 'app-patient-details-page',
  templateUrl: './patient-details-page.component.html',
  styleUrls: ['./patient-details-page.component.scss'],
})
export class PatientDetailsPageComponent implements OnInit {
  public constructor(
    private readonly breadcrumbVariableSubstitute: BreadcrumbVariableSubstituteService,
  ) {}

  public ngOnInit(): void {
    this.breadcrumbVariableSubstitute.substitute(
      RouteBreadcrumbVariable.DETAILS,
      'Wojciech',
    );
  }
}
