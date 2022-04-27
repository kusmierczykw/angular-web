import { Pipe, PipeTransform } from '@angular/core';
import { PatientStatus } from '@modules/patient/components/patient-status/enums/patient-status';
import { CssClass } from '@utils/types/css-class';
import { PatientStatusCssClassProviderService } from '@modules/patient/components/patient-status/providers/patient-status-css-class-provider.service';
import { Nullish } from '@utils/types/nullish';
import { isNullish } from '@utils/is-nullish';

@Pipe({
  name: 'patientStatusCssClass',
})
export class PatientStatusCssClassPipe implements PipeTransform {
  public constructor(
    private readonly cssClassProvider: PatientStatusCssClassProviderService,
  ) {}

  public transform(status: Nullish<PatientStatus>): Nullish<CssClass> {
    if (isNullish(status)) {
      return status;
    }

    return this.cssClassProvider.cssClass(status);
  }
}
