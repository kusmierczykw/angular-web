import { Component, Input } from '@angular/core';
import { Patient } from '@modules/patient/models/patient';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { PatientKey } from '@modules/patient/types/patient-key';

@Component({
  selector: 'app-custom-cell-content-renderer',
  templateUrl: './custom-cell-content-renderer.component.html',
  styleUrls: ['./custom-cell-content-renderer.component.scss'],
})
export class CustomCellContentRendererComponent {
  @Input() public model!: Patient;
  @Input() public column!: TableColumn<PatientKey>;
  @Input() public key!: PatientKey;

  public readonly STATUS_COLUMN_KEY: PatientKey = 'status';
}
