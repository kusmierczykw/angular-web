import { ApiMessage } from '@core/api/components/message/models/api-message';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { HttpErrorResponse } from '@angular/common/http';

export class ApiMessageBuilder {
  private _defaultMessage?: string;
  private _message?: string;
  private _title?: string;

  public reset(): this {
    this._defaultMessage = undefined;
    this._message = undefined;
    this._title = undefined;

    this.default('Wystąpił nieznany błąd.');

    return this;
  }

  public default(message: string): this {
    this._defaultMessage = message;

    return this;
  }

  public success(message: string): this {
    this._message = message;

    return this;
  }

  public error(error: HttpErrorResponse): this {
    return this;
  }

  public title(title: string): this {
    this._title = title;

    return this;
  }

  public type(): this {
    return this;
  }

  public build(): ApiMessage {
    if (!this._message) {
      if (!this._defaultMessage) {
        throw new RequiredMethodCallException('default');
      }

      this._message = this._defaultMessage;
    }

    if (!this._title) {
      throw new RequiredMethodCallException('title');
    }

    return new ApiMessage(this._title, this._message);
  }
}
