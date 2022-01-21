import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SimpleControlBuilderService {
  private readonly builder: FormBuilder;

  private _value?: unknown;
  private _validators: ValidatorFn[] = [];

  public constructor() {
    this.builder = new FormBuilder();

    this.reset();
  }

  public value<Value>(value: Value): this {
    this._value = value;

    return this;
  }

  public required(): this {
    this._validators.push(Validators.required);

    return this;
  }

  public validators(validators: ValidatorFn[]): this {
    this._validators = validators;

    return this;
  }

  public reset(): this {
    this._value = undefined;
    this._validators = [];

    return this;
  }

  public build(): FormControl {
    const control = this.builder.control(this._value);

    control.setValidators([...this._validators]);

    this.reset();

    return control;
  }
}
