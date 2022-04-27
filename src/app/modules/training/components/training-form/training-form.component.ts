import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingFormControl } from '../../../training/components/training-form/training-form.control';
import { FormBuilder, Validators } from '@angular/forms';
import { QuickForm } from '@shared/forms/components/quick-form-renderer/models/quick-form';
import { Training } from '../../../training/models/training';
import { TrainingFormModelMapper } from '../../../training/components/training-form/training-form-model.mapper';
import { of } from 'rxjs';
import { SelectOption } from '@shared/forms/components/quick-form-renderer/models/select-option';
import { QuickFormBuilder } from '@shared/forms/components/quick-form-renderer/builders/quick-form-builder';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss'],
})
export class TrainingFormComponent implements OnInit {
  @Output() public readonly submitClick = new EventEmitter<Training>();
  @Output() public readonly cancelClick = new EventEmitter<void>();

  public form!: QuickForm<TrainingFormControl, Training>;

  public constructor(
    private readonly mapper: TrainingFormModelMapper,
    private readonly formBuilder: FormBuilder,
    private readonly simpleFormBuilder: QuickFormBuilder<
      TrainingFormControl,
      Training
    >,
  ) {}

  public ngOnInit(): void {
    this.configureForm();
  }

  private configureForm(): void {
    this.form = this.simpleFormBuilder
      .control((control) =>
        control
          .initText(TrainingFormControl.NAME)
          .label('Nazwa')
          .required()
          .build(),
      )
      .control((control) =>
        control
          .initDate(TrainingFormControl.STARTED_AT)
          .label('Data rozpoczęcia')
          .required()
          .build(),
      )
      .control((control) =>
        control
          .initDate(TrainingFormControl.FISHED_AT)
          .label('Data zakończenia')
          .required()
          .build(),
      )
      .control((control) =>
        control
          .initInteger(TrainingFormControl.QUANTITY)
          .label('Ilość razy w tygodniu')
          .validators([Validators.min(1), Validators.max(10)])
          .required()
          .build(),
      )
      .control((control) =>
        control
          .initSelect(TrainingFormControl.GROUP)
          .selectConfig({
            optionsProvider: {
              options$: of([
                new SelectOption<string>('Dzieci', 'children'),
                new SelectOption<string>('Kobiety', 'woman'),
                new SelectOption<string>('Mężczyźni', 'man'),
                new SelectOption<string>('Kobiety w ciąży', 'pregnant'),
              ]),
            },
          })
          .label('Grupa docelowa')
          .hint('Grupa osób, do których skierowany jest trening.')
          .required()
          .build(),
      )
      .cancel((cancel) =>
        cancel
          .command({
            execute: () => this.cancelClick.emit(),
          })
          .build(),
      )
      .submit((submit) =>
        submit
          .command({
            execute: (model: Training) => this.submitClick.emit(model),
          })
          .build(),
      )
      .mapper(() => this.mapper)
      .build();
  }
}
