import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PatientStatus } from '@modules/patient/components/patient-status/enums/patient-status';

@Injectable({
  providedIn: 'root',
})
export class PatientStatusLabelProviderService {
  private readonly labels: Record<PatientStatus, string> = {
    [PatientStatus.ACTIVE]: 'Aktywny',
    [PatientStatus.INACTIVE]: 'Nieaktywny',
  };

  public label(status: PatientStatus): Observable<string> {
    return of(this.labels[status]);
  }
}
