import { Injectable } from '@angular/core';
import { RequiredMethodCallException } from '@core/exceptions';
import { ValidatorFn, Validators } from '@angular/forms';
import { QuickControlType } from '@shared/forms/components/quick-form-renderer/enums';
import { QuickFormControl } from '@shared/forms/components/quick-form-renderer/models';
import { QuickControlConfig } from '@shared/forms/components/quick-form-renderer/types';
import { TextControlConfig } from '@shared/forms/components/quick-form-renderer/interfaces/text-control-config';
import { NumberControlConfig } from '@shared/forms/components/quick-form-renderer/interfaces/number-control-config';

@Injectable({
  providedIn: 'root',
})
export class QuickFormControlBuilder<ControlName, Value = unknown> {
  private _type!: QuickControlType;
  private _validators!: ValidatorFn[];
  private _name?: ControlName;
  private _label?: string;
  private _placeholder?: string;
  private _value?: Value;
  private _disabled?: boolean;
  private _config?: QuickControlConfig;

  public constructor() {
    this.reset();
  }

  public reset(): this {
    this._validators = [];
    this._name = undefined;
    this._value = undefined;
    this._label = undefined;
    this._placeholder = undefined;
    this._config = undefined;

    this.type(QuickControlType.TEXT);
    this.disabled(() => false);

    return this;
  }

  public init(name: ControlName): this {
    this._name = name;

    return this;
  }

  public initText(name: ControlName): this {
    return this.init(name).type(QuickControlType.TEXT).textConfig({
      type: 'text',
    });
  }

  public initFloat(name: ControlName): this {
    return this.init(name).type(QuickControlType.NUMBER).numberConfig({
      step: 0.1,
    });
  }

  public initInteger(name: ControlName): this {
    return this.init(name).type(QuickControlType.NUMBER).numberConfig({
      step: 1,
    });
  }

  public initDate(name: ControlName): this {
    return this.init(name).type(QuickControlType.DATE);
  }

  public textConfig(config: TextControlConfig): this {
    return this.config(config);
  }

  public numberConfig(config: NumberControlConfig): this {
    return this.config(config);
  }

  public config(config: QuickControlConfig): this {
    this._config = { ...this._config, ...config };

    return this;
  }

  public type(type: QuickControlType): this {
    this._type = type;

    return this;
  }

  public disabled(factory: () => boolean): this {
    this._disabled = factory();

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

  public value(value: Value): this {
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

  public build(): QuickFormControl<ControlName, Value> {
    this.validate();

    const control = new QuickFormControl<ControlName, Value>(
      this._name!,
      this._type,
      this._validators,
      this._disabled,
      this._value,
      this._label,
      this._placeholder,
      this._config,
    );

    this.reset();

    return control;
  }

  private validate(): void {
    this.validateName();
    this.validateTextConfig();
    this.validateNumberConfig();
  }

  private validateName(): void {
    if (!this._name) {
      throw new RequiredMethodCallException('init');
    }
  }

  private validateTextConfig(): void {
    if (this._type !== QuickControlType.TEXT) {
      return;
    }

    if (!this._config) {
      throw new RequiredMethodCallException('textConfig');
    }
  }

  private validateNumberConfig(): void {
    if (this._type !== QuickControlType.NUMBER) {
      return;
    }

    if (!this._config) {
      throw new RequiredMethodCallException('numberConfig');
    }
  }
}
