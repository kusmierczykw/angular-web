import { Injectable } from '@angular/core';
import { QuickForm } from '@shared/forms/components/quick-form-renderer/models/quick-form';
import { ValidatorFn } from '@angular/forms';
import { UniquenessException } from '@core/exceptions/uniqueness.exception';
import { ActionButtonBuilder } from '@shared/buttons/components/action-button/builders';
import { ActionButton } from '@shared/buttons/components/action-button/models';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models';
import { QuickControlNameType } from '@shared/forms/components/quick-form-renderer/types';
import { QuickControlBuilder } from '@shared/forms/components/quick-form-renderer/builders/quick-control-builder';
import { ActionButtonStyle } from '@shared/buttons/components/action-button/enums';
import { QuickFormModelMapper } from '@shared/forms/components/quick-form-renderer/interfaces/quick-form-model.mapper';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';

@Injectable({
  providedIn: 'root',
})
export class QuickFormBuilder<ControlName extends QuickControlNameType, Model> {
  private _controls!: QuickFormControl<ControlName>[];
  private _validators!: ValidatorFn[];
  private _submit?: ActionButton<Model>;
  private _cancel?: ActionButton;
  private _mapper?: QuickFormModelMapper<Model>;

  public constructor(
    private readonly buttonBuilder: ActionButtonBuilder,
    private readonly controlBuilder: QuickControlBuilder<ControlName>,
  ) {
    this.reset();
  }

  public reset(): this {
    this._controls = [];
    this._validators = [];
    this._submit = undefined;
    this._cancel = undefined;
    this._mapper = undefined;

    return this;
  }

  public submit(
    factory: (builder: ActionButtonBuilder<Model>) => ActionButton<Model>,
  ): this {
    this._submit = factory(
      this.buttonBuilder
        .label('Zapisz')
        .htmlButtonType('submit') as ActionButtonBuilder<Model>,
    );

    return this;
  }

  public cancel(factory: (builder: ActionButtonBuilder) => ActionButton): this {
    this._cancel = factory(
      this.buttonBuilder.label('Anuluj').style(ActionButtonStyle.STROKED),
    );

    return this;
  }

  public control<Value>(
    factory: (
      builder: QuickControlBuilder<ControlName, Value>,
    ) => QuickFormControl<ControlName, Value>,
  ): this {
    const control = factory(
      this.controlBuilder as QuickControlBuilder<ControlName, Value>,
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
}
