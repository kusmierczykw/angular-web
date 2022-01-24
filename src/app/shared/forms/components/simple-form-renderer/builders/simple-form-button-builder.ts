import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SimpleFormButton } from '@shared/forms/components/simple-form-renderer/models';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';

@Injectable({
  providedIn: 'root',
})
export class SimpleFormButtonBuilder {
  private _label!: string;
  private _visibility!: Observable<boolean>;
  private _disabled!: Observable<boolean>;
  private _command!: () => void;

  public constructor() {
    this.reset();
  }

  public build(): SimpleFormButton {
    this.validate();

    const button = new SimpleFormButton(
      this._label,
      this._visibility,
      this._disabled,
      this._command,
    );

    this.reset();

    return button;
  }

  public label(label: string): this {
    this._label = label;

    return this;
  }

  public visibility(factory: () => Observable<boolean>): this {
    this._visibility = factory();

    return this;
  }

  public disabled(factory: () => Observable<boolean>): this {
    this._disabled = factory();

    return this;
  }

  public command(command: () => void): this {
    this._command = command;

    return this;
  }

  public reset(): this {
    return this.visibility(() => of(true)).disabled(() => of(false));
  }

  private validate(): void {
    this.validateCommand();
    this.validateLabel();
  }

  private validateCommand(): void {
    if (!this._command) {
      throw new RequiredMethodCallException('command');
    }
  }

  private validateLabel(): void {
    if (!this._label) {
      throw new RequiredMethodCallException('label');
    }
  }
}
