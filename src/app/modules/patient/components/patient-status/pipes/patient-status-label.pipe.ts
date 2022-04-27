import { Pipe, PipeTransform } from '@angular/core';
import { Nullish } from '@utils/types/nullish';
import { PatientStatus } from '@modules/patient/components/patient-status/enums/patient-status';
import { Observable, of } from 'rxjs';
import { PatientStatusLabelProviderService } from '@modules/patient/components/patient-status/providers/patient-status-label-provider.service';
import { isNullish } from '@utils/is-nullish';

@Pipe({
  name: 'patientStatusLabel',
})
export class PatientStatusLabelPipe implements PipeTransform {
  public constructor(
    private readonly labelProvider: PatientStatusLabelProviderService,
  ) {}

  public transform(
    status: Nullish<PatientStatus>,
  ): Observable<Nullish<string>> {
    if (isNullish(status)) {
      return of(status);
    }

    return this.labelProvider.label(status);
  }
}
