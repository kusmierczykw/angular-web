import { Component, Input } from '@angular/core';
import { PatientStatus } from '@modules/patient/components/patient-status/enums/patient-status';

@Component({
  selector: 'app-patient-status',
  templateUrl: './patient-status.component.html',
  styleUrls: ['./patient-status.component.scss'],
})
export class PatientStatusComponent {
  @Input() public status!: PatientStatus;
}
