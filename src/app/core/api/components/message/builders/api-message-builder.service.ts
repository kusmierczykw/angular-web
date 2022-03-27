import { ApiMessage } from '@core/api/components/message/models/api-message';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpErrorProcessorService } from '@core/api/services/http-error-processor.service';

@Injectable({
  providedIn: 'root',
})
export class ApiMessageBuilderService {
  private _defaultMessage?: string;
  private _message?: string;
  private _title?: string;

  public constructor(
    private readonly httpErrorProcessor: HttpErrorProcessorService,
  ) {
    this.reset();
  }

  public newInstance(): ApiMessageBuilderService {
    return new ApiMessageBuilderService(this.httpErrorProcessor);
  }

  public reset(): this {
    this._defaultMessage = undefined;
    this._message = undefined;
    this._title = undefined;

    return this;
  }

  public default(message: string): this {
    this._defaultMessage = message;

    return this;
  }

  public success(message: string): this {
    this.title('Sukces').message(message);

    return this;
  }

  public error(error: string): this {
    this.title('Błąd').message(error);

    return this;
  }

  public httpError(error: HttpErrorResponse): this {
    const httpError = this.httpErrorProcessor.init(error).extractHttpError();
    const { message } = httpError;

    this.title('Błąd').default('Wystąpił nieznany błąd.').message(message);

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
    this.validate();

    const message = new ApiMessage(this._title!, this._message!);

    this.reset();

    return message;
  }

  private message(message: string): this {
    this._message = message;

    return this;
  }

  private validate(): void {
    this.validateMessage();
    this.validateTitle();
  }

  private validateMessage(): void {
    if (!this._message) {
      if (!this._defaultMessage) {
        throw new RequiredMethodCallException('default');
      }

      this.message(this._defaultMessage);
    }
  }

  private validateTitle(): void {
    if (!this._title) {
      throw new RequiredMethodCallException('title');
    }
  }
}
