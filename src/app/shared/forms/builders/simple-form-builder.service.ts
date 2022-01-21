import { Injectable } from '@angular/core';
import { SimpleControlBuilderService } from '@shared/forms/builders/simple-control-builder.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

type ControlNameType = string | number | symbol;

@Injectable({
  providedIn: 'root',
})
export class SimpleFormBuilderService<ControlName extends ControlNameType> {
  private readonly builder: FormBuilder;

  private _controls: { [key in ControlName]?: FormControl } = {};
  private _validators: ValidatorFn[] = [];

  public constructor(
    private readonly controlBuilder: SimpleControlBuilderService,
  ) {
    this.builder = new FormBuilder();
    
    this.reset();
  }

  public addControl(
    name: ControlName,
    factory: (builder: SimpleControlBuilderService) => FormControl,
  ): this {
    this._controls[name] = factory(this.controlBuilder);

    return this;
  }

  public reset(): this {
    this._controls = {};
    this._validators = [];

    return this;
  }

  public build(): FormGroup {
    const form = this.builder.group(this._controls);

    form.setValidators([...this._validators]);

    return form;
  }
}
