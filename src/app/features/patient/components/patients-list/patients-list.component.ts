import { Component, OnInit } from '@angular/core';
import { QuickTableBuilderService } from '@shared/tables/components/quick-table-renderer/builder/quick-table-builder.service';
import { PatientKey } from '@features/patient/types/patient-key';
import { Table } from '@shared/tables/components/quick-table-renderer/models/table';
import { PatientRowAction } from '@features/patient/enums/patient-row-action';
import { Patient } from '@features/patient/models/patient';
import { Icon } from '@core/icons/enums/icon';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  public quickTable!: Table<PatientKey, PatientRowAction, Patient>;
  public data = [
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      false,
      12,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      1000,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      3000,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      900,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      200,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      1000,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      300,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      'ACTIVE',
      true,
      100,
    ),
  ];

  public constructor(
    private readonly quickTableBuilder: QuickTableBuilderService<
      PatientKey,
      PatientRowAction,
      Patient
    >,
  ) {}

  public ngOnInit(): void {
    this.quickTable = this.quickTableBuilder
      .actions((builder) => [
        builder
          .initRouterLink(PatientRowAction.PREVIEW)
          .icon(Icon.EYE_FILL)
          .tooltip('Podgląd')
          .routerLink(() => {
            return ['/'];
          })
          .build(),

        builder
          .initCommand(PatientRowAction.DEACTIVATE)
          .icon(Icon.EYE_FILL)
          .tooltip('Dezaktywuj')
          .command((model) => {
            console.log(model);
          })
          .build(),
      ])
      .columns((builder) => [
        builder.initOrdinary().stickyLeft().build(),

        builder.init('firstName').label('Imię').width('20rem').build(),

        builder.init('lastName').label('Nazwisko').width('20rem').build(),

        builder.initNumber('age').label('Wiek').width('15rem').build(),

        builder.initCurrency('amount').label('Cena').width('15rem').build(),

        builder.initCustom('status').label('Status').width('20rem').build(),

        builder
          .initDate('createdAt')
          .label('Data utworzenia')
          .width('20rem')
          .build(),

        builder
          .initDateTime('updatedAt')
          .label('Data aktualizacji')
          .width('20rem')
          .build(),

        builder
          .initBoolean('active')
          .label('Czy aktywny?')
          .width('15rem')
          .build(),

        builder.initAction().stickyRight().build(),
      ])
      .build();
  }
}
