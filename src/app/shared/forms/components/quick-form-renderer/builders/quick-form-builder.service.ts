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

@Injectable({
  providedIn: 'root',
})
export class QuickFormBuilder<ControlName extends QuickControlNameType> {
  private _controls!: QuickFormControl<ControlName>[];
  private _validators!: ValidatorFn[];
  private _submit!: ActionButton;
  private _cancel!: ActionButton;

  public constructor(
    private readonly buttonBuilder: ActionButtonBuilder,
    private readonly controlBuilder: QuickControlBuilder<ControlName>,
  ) {
    this.reset();
  }

  public reset(): this {
    this._controls = [];
    this._validators = [];

    return this;
  }

  public submit(factory: (builder: ActionButtonBuilder) => ActionButton): this {
    this._submit = factory(
      this.buttonBuilder.label('Zapisz').htmlButtonType('submit'),
    );

    return this;
  }

  public cancel(factory: (builder: ActionButtonBuilder) => ActionButton): this {
    this._cancel = factory(
      this.buttonBuilder.label('Anuluj').style(ActionButtonStyle.STROKED),
    );

    return this;
  }

  public controls(
    factory: (
      builder: QuickControlBuilder<ControlName>,
    ) => QuickFormControl<ControlName>[],
  ): this {
    this._controls.push(...factory(this.controlBuilder));

    return this;
  }

  public control(
    factory: (
      builder: QuickControlBuilder<ControlName>,
    ) => QuickFormControl<ControlName>,
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

  public build(): QuickForm<ControlName> {
    const form = new QuickForm(
      this._controls,
      this._validators,
      this._submit,
      this._cancel,
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
