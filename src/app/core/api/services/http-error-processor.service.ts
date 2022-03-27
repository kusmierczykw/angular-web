import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { HttpError } from '@core/api/models/http-error';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorProcessorService {
  private _error?: HttpErrorResponse;

  public constructor() {
    this.reset();
  }

  public reset(): this {
    this._error = undefined;

    return this;
  }

  public init(error: HttpErrorResponse): this {
    this._error = error;

    return this;
  }

  public extractHttpError(): HttpError {
    this.validate();

    const { error } = this._error!;
    const httpError = new HttpError('Wystąpił błąd.');

    this.reset();

    return httpError;
  }

  private validate(): void {
    if (!this._error) {
      throw new RequiredMethodCallException('init');
    }
  }
}
