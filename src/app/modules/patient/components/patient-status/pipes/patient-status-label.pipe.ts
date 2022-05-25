import { Pipe, PipeTransform } from '@angular/core';
import { Nil } from '@utils/types/nil';
import { PatientStatus } from '@modules/patient/components/patient-status/enums/patient-status';
import { Observable, of } from 'rxjs';
import { PatientStatusLabelProviderService } from '@modules/patient/components/patient-status/providers/patient-status-label-provider.service';
import { isNil } from '@utils/is-nil';

@Pipe({
  name: 'patientStatusLabel',
})
export class PatientStatusLabelPipe implements PipeTransform {
  public constructor(
    private readonly labelProvider: PatientStatusLabelProviderService,
  ) {}

  public transform(status: Nil<PatientStatus>): Observable<Nil<string>> {
    if (isNil(status)) {
      return of(status);
    }

    return this.labelProvider.label(status);
  }
}
