import { Injectable } from '@angular/core';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { ValidatorFn, Validators } from '@angular/forms';
import { SimpleControlNameType, SimpleControlType } from '@shared/forms/components/simple-form-renderer/types';
import { SimpleFormControl } from '@shared/forms/components/simple-form-renderer/models';

@Injectable({
  providedIn: 'root',
})
export class SimpleControlBuilder<ControlName extends SimpleControlNameType> {
  private _type!: SimpleControlType;
  private _name!: ControlName;
  private _validators!: ValidatorFn[];
  private _label?: string;
  private _placeholder?: string;
  private _value?: unknown;
  private _disabled?: boolean;

  public constructor() {
    this.reset();
  }

  public init(name: ControlName): this {
    this._name = name;

    return this;
  }

  public initText(name: ControlName): this {
    return this.init(name).type(SimpleControlType.TEXT);
  }

  public initNumber(name: ControlName): this {
    return this.init(name).type(SimpleControlType.NUMBER);
  }

  public initDate(name: ControlName): this {
    return this.init(name).type(SimpleControlType.DATE);
  }

  public type(type: SimpleControlType): this {
    this._type = type;

    return this;
  }

  public disabled(disabled: boolean): this {
    this._disabled = disabled;

    return this;
  }

  public label(label: string): this {
    this._label = label;

    return this;
  }

  public placeholder(placeholder: string): this {
    this._placeholder = placeholder;

    return this;
  }

  public value<T>(value: T): this {
    this._value = value;

    return this;
  }

  public addValidator(validator: ValidatorFn): this {
    this._validators.push(validator);

    return this;
  }

  public required(): this {
    return this.addValidator(Validators.required);
  }

  public reset(): this {
    this._validators = [];
    this._value = undefined;
    this._label = undefined;
    this._placeholder = undefined;

    return this.type(SimpleControlType.TEXT).disabled(false);
  }

  public build(): SimpleFormControl<ControlName> {
    this.validate();

    const control = new SimpleFormControl(
      this._name,
      this._type,
      this._validators,
      this._disabled,
      this._value,
      this._label,
      this._placeholder,
    );

    this.reset();

    return control;
  }

  private validate(): void {
    this.validateName();
  }

  private validateName(): void {
    if (!this._name) {
      throw new RequiredMethodCallException('init');
    }
  }
}
