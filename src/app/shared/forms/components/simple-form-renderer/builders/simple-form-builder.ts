import { Injectable } from '@angular/core';
import { SimpleForm } from '@shared/forms/components/simple-form-renderer/models/simple-form';
import { ValidatorFn } from '@angular/forms';
import { UniquenessException } from '@core/exceptions/uniqueness.exception';
import { ActionButtonBuilder } from '@shared/buttons/components/action-button/builders';
import { ActionButton } from '@shared/buttons/components/action-button/models';
import { SimpleFormControl } from '@shared/forms/components/simple-form-renderer/models';
import { SimpleControlNameType } from '@shared/forms/components/simple-form-renderer/types';
import { SimpleControlBuilder } from '@shared/forms/components/simple-form-renderer/builders/simple-control-builder';
import { ActionButtonStyle } from '@shared/buttons/components/action-button/enums';

@Injectable({
  providedIn: 'root',
})
export class SimpleFormBuilder<ControlName extends SimpleControlNameType> {
  private _controls!: SimpleFormControl<ControlName>[];
  private _validators!: ValidatorFn[];
  private _actions!: ActionButton[];

  public constructor(
    private readonly buttonBuilder: ActionButtonBuilder,
    private readonly controlBuilder: SimpleControlBuilder<ControlName>,
  ) {
    this.reset();
  }

  public reset(): this {
    this._controls = [];
    this._validators = [];
    this._actions = [];

    return this;
  }

  public action(factory: (builder: ActionButtonBuilder) => ActionButton): this {
    const button = factory(this.buttonBuilder);

    this._actions.push(button);

    return this;
  }

  public submit(factory: (builder: ActionButtonBuilder) => ActionButton): this {
    const button = factory(
      this.buttonBuilder.label('Zapisz').htmlButtonType('submit'),
    );

    this._actions.push(button);

    return this;
  }

  public cancel(factory: (builder: ActionButtonBuilder) => ActionButton): this {
    const button = factory(
      this.buttonBuilder.label('Anuluj').style(ActionButtonStyle.STROKED),
    );

    this._actions.push(button);

    return this;
  }

  public controls(
    factory: (
      builder: SimpleControlBuilder<ControlName>,
    ) => SimpleFormControl<ControlName>[],
  ): this {
    this._controls.push(...factory(this.controlBuilder));

    return this;
  }

  public control(
    factory: (
      builder: SimpleControlBuilder<ControlName>,
    ) => SimpleFormControl<ControlName>,
  ): this {
    const control = factory(this.controlBuilder);
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

  public build(): SimpleForm<ControlName> {
    const form = new SimpleForm(
      this._controls,
      this._validators,
      this._actions,
    );

    this.reset();

    return form;
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
