import { Injectable } from '@angular/core';
import { QuickForm } from '@shared/forms/components/quick-form-renderer/models/quick-form';
import { ValidatorFn } from '@angular/forms';
import { QuickFormControlBuilder } from '@shared/forms/components/quick-form-renderer/builders/quick-form-control-builder';
import { QuickFormModelMapper } from '@shared/forms/components/quick-form-renderer/interfaces/quick-form-model-mapper';
import { QuickControlName } from '@shared/forms/components/quick-form-renderer/types/quick-control.name';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models/quick-form-control';
import { Button } from '@shared/buttons/components/button/models/button';
import { Confirmation } from '@shared/confirmations/components/confirmation/models/confirmation';
import { ButtonBuilder } from '@shared/buttons/components/button/builders/button-builder.service';
import { ConfirmationBuilder } from '@shared/confirmations/components/confirmation/builders/confirmation-builder';
import { ButtonStyle } from '@shared/buttons/components/button/enums/button-style';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { UniquenessException } from '@core/exceptions/uniqueness.exception';

@Injectable({
  providedIn: 'root',
})
export class QuickFormBuilder<ControlName extends QuickControlName, Model> {
  private _controls!: QuickFormControl<ControlName>[];
  private _validators!: ValidatorFn[];
  private _submit?: Button<Model>;
  private _cancel?: Button;
  private _mapper?: QuickFormModelMapper<Model>;
  private _cancellationConfirmation?: Confirmation;

  public constructor(
    private readonly buttonBuilder: ButtonBuilder,
    private readonly controlBuilder: QuickFormControlBuilder<ControlName>,
    private readonly confirmationBuilder: ConfirmationBuilder,
  ) {
    this.reset();
  }

  public reset(): this {
    this._controls = [];
    this._validators = [];
    this._submit = undefined;
    this._cancel = undefined;
    this._mapper = undefined;
    this._cancellationConfirmation =
      this.cancellationConfirmationBuilder().build();

    return this;
  }

  public submit(
    factory: (builder: ButtonBuilder<Model>) => Button<Model>,
  ): this {
    this._submit = factory(
      this.buttonBuilder
        .label('Zapisz')
        .htmlButtonType('submit') as ButtonBuilder<Model>,
    );

    return this;
  }

  public disableCancellationConfirmation(): this {
    this._cancellationConfirmation = undefined;

    return this;
  }

  public cancellationConfirmation(
    factory: (builder: ConfirmationBuilder) => Confirmation,
  ): this {
    const builder = this.cancellationConfirmationBuilder();

    this._cancellationConfirmation = factory(builder);

    return this;
  }

  public cancel(factory: (builder: ButtonBuilder) => Button): this {
    this._cancel = factory(
      this.buttonBuilder.label('Anuluj').style(ButtonStyle.STROKED),
    );

    return this;
  }

  public control<Value>(
    factory: (
      builder: QuickFormControlBuilder<ControlName, Value>,
    ) => QuickFormControl<ControlName, Value>,
  ): this {
    const control = factory(
      this.controlBuilder as QuickFormControlBuilder<ControlName, Value>,
    );
    const { name } = control;

    this.validateControlExists(name);

    this._controls.push(control);

    return this;
  }

  public validators(validators: ValidatorFn[]): this {
    this._validators.push(...validators);

    return this;
  }

  public validator(validator: ValidatorFn): this {
    this._validators.push(validator);

    return this;
  }

  public mapper(factory: () => QuickFormModelMapper<Model>): this {
    this._mapper = factory();

    return this;
  }

  public build(): QuickForm<ControlName, Model> {
    this.validate();

    const form = new QuickForm(
      this._controls,
      this._validators,
      this._mapper!,
      this._submit!,
      this._cancel,
      this._cancellationConfirmation,
    );

    this.reset();

    return form;
  }

  private validate(): void {
    this.validateSubmit();
    this.validateMapper();
  }

  private validateSubmit(): void {
    if (!this._submit) {
      throw new RequiredMethodCallException('submit');
    }
  }

  private validateMapper(): void {
    if (!this._mapper) {
      throw new RequiredMethodCallException('mapper');
    }
  }

  private validateControlExists(name: ControlName): void {
    const exists = this._controls.find(
      ({ name: nameToCheck }) => nameToCheck === name,
    );

    if (!exists) {
      return;
    }

    throw new UniquenessException(`The control ${name} must have unique name.`);
  }

  private cancellationConfirmationBuilder(): ConfirmationBuilder {
    return this.confirmationBuilder
      .title('Potwierdzenie')
      .body('Czy na pewno chcesz przerwać uzupełnianie formularza?');
  }
}
