import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';

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

  public extract(): void {
    this.validate();
    this.reset();
  }

  private validate(): void {
    if (!this._error) {
      throw new RequiredMethodCallException('init');
    }
  }
}
