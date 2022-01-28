import { Injectable } from '@angular/core';
import { Confirmation } from '@shared/confirmations/components/confirmation/models';
import { ActionButton } from '@shared/buttons/components/action-button/models';
import { ActionButtonBuilder } from '@shared/buttons/components/action-button/builders';
import { ActionButtonStyle } from '@shared/buttons/components/action-button/enums';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationBuilder {
  private _title?: string;
  private _body?: string;
  private _accept!: ActionButton;
  private _reject!: ActionButton;

  public constructor(
    private readonly actionButtonBuilder: ActionButtonBuilder,
  ) {
    this.reset();
  }

  public reset(): this {
    return this;
  }

  public title(title: string): this {
    this._title = title;

    return this;
  }

  public body(body: string): this {
    this._body = body;

    return this;
  }

  public accept(factory: (builder: ActionButtonBuilder) => ActionButton): this {
    this._accept = factory(this.actionButtonBuilder.label('Tak'));

    return this;
  }

  public reject(factory: (builder: ActionButtonBuilder) => ActionButton): this {
    this._reject = factory(
      this.actionButtonBuilder.label('Nie').style(ActionButtonStyle.RAISED),
    );

    return this;
  }

  public build(): Confirmation {
    this.validate();

    const confirmation = new Confirmation(
      this._title!,
      this._body!,
      this._accept!,
      this._reject!,
    );

    this.reset();

    return confirmation;
  }

  private validate(): void {
    this.validateTitle();
    this.validateBody();
    this.validateAccept();
    this.validateReject();
  }

  private validateTitle(): void {
    if (!this._title) {
      throw new RequiredMethodCallException('title');
    }
  }

  private validateBody(): void {
    if (!this._body) {
      throw new RequiredMethodCallException('body');
    }
  }

  private validateAccept(): void {
    if (!this._accept) {
      throw new RequiredMethodCallException('accept');
    }
  }

  private validateReject(): void {
    if (!this._reject) {
      throw new RequiredMethodCallException('reject');
    }
  }
}
