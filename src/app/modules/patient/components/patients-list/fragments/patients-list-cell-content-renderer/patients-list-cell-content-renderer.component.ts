import { Component, Input } from '@angular/core';
import { Patient } from '@modules/patient/models/patient';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { PatientKey } from '@modules/patient/types/patient-key';

@Component({
  selector: 'app-patients-list-cell-content-renderer',
  templateUrl: './patients-list-cell-content-renderer.component.html',
  styleUrls: ['./patients-list-cell-content-renderer.component.scss'],
})
export class PatientsListCellContentRendererComponent {
  @Input() public model!: Patient;
  @Input() public column!: TableColumn<PatientKey>;
  @Input() public key!: PatientKey;

  public readonly STATUS: PatientKey = 'status';
}
