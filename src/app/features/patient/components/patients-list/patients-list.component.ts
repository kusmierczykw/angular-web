import { Component, OnInit } from '@angular/core';
import { QuickTableBuilderService } from '@shared/tables/components/quick-table-renderer/builder/quick-table-builder.service';
import { PatientKey } from '@features/patient/types/patient-key';
import { QuickTable } from '@shared/tables/components/quick-table-renderer/models/quick-table';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  public constructor(
    private readonly quickTableBuilder: QuickTableBuilderService<PatientKey>,
  ) {}

  public ngOnInit(): void {
    const quickTable: QuickTable<PatientKey> = this.quickTableBuilder.build();
  }
}
