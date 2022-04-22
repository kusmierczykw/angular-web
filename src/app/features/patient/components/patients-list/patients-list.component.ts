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
  public quickTable!: QuickTable<PatientKey>;

  public constructor(
    private readonly quickTableBuilder: QuickTableBuilderService<PatientKey>,
  ) {}

  public ngOnInit(): void {
    this.quickTable = this.quickTableBuilder
      .columns((builder) => [
        builder //
          .initOrdinaryColumn()
          .stickyLeft()
          .build(),

        builder //
          .init('firstName')
          .label('Imię')
          .width('20rem')
          .build(),

        builder //
          .init('lastName')
          .label('Nazwisko')
          .width('20rem')
          .build(),

        builder //
          .init('age')
          .label('Wiek')
          .width('15rem')
          .build(),

        builder //
          .init('createdAt')
          .label('Data utworzenia')
          .width('20rem')
          .build(),

        builder //
          .init('updatedAt')
          .label('Data aktualizacji')
          .width('20rem')
          .build(),

        builder //
          .init('active')
          .label('Czy aktywny?')
          .width('15rem')
          .stickyRight()
          .build(),
      ])
      .build();
  }
}
