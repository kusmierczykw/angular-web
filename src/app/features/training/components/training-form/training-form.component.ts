import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingFormControl } from '@features/training/components/training-form/training-form.control';
import { FormBuilder } from '@angular/forms';
import { QuickForm } from '@shared/forms/components/quick-form-renderer/models/quick-form';
import { QuickFormBuilder } from '@shared/forms/components/quick-form-renderer/builders';
import { TrainingModel } from '@features/training/models/training.model';
import { TrainingFormModelMapper } from '@features/training/components/training-form/training-form-model.mapper';
import { of } from 'rxjs';
import { SelectOption } from '@shared/forms/components/quick-form-renderer/models/select-option';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.scss'],
})
export class TrainingFormComponent implements OnInit {
  @Output() public readonly submitClick = new EventEmitter<TrainingModel>();
  @Output() public readonly cancelClick = new EventEmitter<void>();

  public form!: QuickForm<TrainingFormControl, TrainingModel>;

  public constructor(
    private readonly mapper: TrainingFormModelMapper,
    private readonly formBuilder: FormBuilder,
    private readonly simpleFormBuilder: QuickFormBuilder<
      TrainingFormControl,
      TrainingModel
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
          .required()
          .build(),
      )
      .control((control) =>
        control
          .initSelect(TrainingFormControl.GROUP)
          .selectConfig({
            optionsProvider: {
              options$: of([
                new SelectOption<string>('Kobiety', 'woman'),
                new SelectOption<string>('Mężczyźni', 'man'),
                new SelectOption<string>('Dzieci', 'children'),
              ]),
            },
          })
          .label('Grupa docelowa')
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
            execute: (model: TrainingModel) => this.submitClick.emit(model),
          })
          .build(),
      )
      .mapper(() => this.mapper)
      .build();
  }
}
