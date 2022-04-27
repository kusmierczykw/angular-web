import { Injectable } from '@angular/core';
import { PatientStatus } from '@modules/patient/components/patient-status/enums/patient-status';
import { CssClass } from '@utils/types/css-class';

@Injectable({
  providedIn: 'root',
})
export class PatientStatusCssClassProviderService {
  private cssClasses: Record<PatientStatus, CssClass> = {
    [PatientStatus.ACTIVE]: 'active',
    [PatientStatus.INACTIVE]: 'inactive',
  };

  public cssClass(status: PatientStatus): CssClass {
    return this.cssClasses[status];
  }
}
