import { Component, OnInit } from '@angular/core';
import { QuickTableBuilderService } from '@shared/tables/components/quick-table-renderer/builder/quick-table-builder.service';
import { PatientKey } from '../../../patient/types/patient-key';
import { Table } from '@shared/tables/components/quick-table-renderer/models/table';
import { PatientRowAction } from '@modules/patient/enums/patient-row-action';
import { Patient } from '../../../patient/models/patient';
import { Icon } from '@core/icons/enums/icon';
import { PatientStatus } from '@modules/patient/components/patient-status/enums/patient-status';

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
      PatientStatus.ACTIVE,
      false,
      12,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      PatientStatus.ACTIVE,
      true,
      1000,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      PatientStatus.INACTIVE,
      true,
      3000,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      PatientStatus.INACTIVE,
      true,
      900,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      PatientStatus.ACTIVE,
      true,
      200,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      PatientStatus.ACTIVE,
      true,
      1000,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      PatientStatus.INACTIVE,
      true,
      300,
    ),
    new Patient(
      'Jan',
      'Kowalski',
      12,
      new Date(),
      new Date(),
      PatientStatus.ACTIVE,
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
          .icon(Icon.SLASH_CIRCLE)
          .tooltip('Dezaktywuj')
          .command((model) => {})
          .build(),

        builder
          .initMore()
          .children((builder) => [
            builder
              .initCommand(PatientRowAction.EDIT)
              .command((model) => {})
              .label('Edytuj')
              .build(),
          ])
          .build(),
      ])
      .columns((builder) => {
        /* prettier-ignore */
        return [
          builder
            .initOrdinary()
            .stickyLeft()
            .build(),

          builder
            .init('firstName')
            .label('Imię')
            .width('12rem')
            .build(),

          builder
            .init('lastName')
            .label('Nazwisko')
            .width('12rem')
            .build(),

          builder
            .initNumber('age')
            .label('Wiek')
            .width('5rem')
            .build(),

          builder
            .initCurrency('amount')
            .label('Cena')
            .width('8rem')
            .build(),

          builder
            .initCustom('status')
            .label('Status')
            .width('10rem')
            .build(),

          builder
            .initDate('createdAt')
            .label('Data utworzenia')
            .width('12rem')
            .build(),

          builder
            .initDateTime('updatedAt')
            .label('Data aktualizacji')
            .width('12rem')
            .build(),

          builder
            .initBoolean('blocked')
            .label('Zablokowany')
            .width('10rem')
            .build(),

          builder
            .initAction()
            .stickyRight()
            .build(),
        ];
      })
      .build();
  }
}
