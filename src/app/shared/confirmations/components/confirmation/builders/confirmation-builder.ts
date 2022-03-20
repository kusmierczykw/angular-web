import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { Button } from '@shared/buttons/components/button/models/button';
import { ButtonBuilder } from '@shared/buttons/components/button/builders/button-builder.service';
import { Confirmation } from '@shared/confirmations/components/confirmation/models/confirmation';
import { ButtonStyle } from '@shared/buttons/components/button/enums/button-style';
import { RequiredMethodCallException } from '@core/exceptions/required-method-call.exception';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationBuilder {
  private readonly DEFAULT_CONFIG: MatDialogConfig = {
    disableClose: true,
    width: '32rem',
  };

  private _title?: string;
  private _body?: string;
  private _accept?: Button;
  private _reject?: Button;
  private _config!: MatDialogConfig;

  public constructor(private readonly actionButtonBuilder: ButtonBuilder) {
    this.reset();
  }

  public reset(): this {
    this._title = 'Potwierdzenie';
    this._body = undefined;
    this._config = this.DEFAULT_CONFIG;
    this._accept = this.acceptButtonBuilder()
      .command({
        execute: () => {},
      })
      .build();
    this._reject = this.rejectButtonBuilder()
      .command({
        execute: () => {},
      })
      .build();

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

  public accept(factory: (builder: ButtonBuilder) => Button): this {
    this._accept = factory(this.acceptButtonBuilder());

    return this;
  }

  public reject(factory: (builder: ButtonBuilder) => Button): this {
    this._reject = factory(this.rejectButtonBuilder());

    return this;
  }

  public build(): Confirmation {
    this.validate();

    const confirmation = new Confirmation(
      this._title!,
      this._body!,
      this._accept!,
      this._reject!,
      this._config,
    );

    this.reset();

    return confirmation;
  }

  private acceptButtonBuilder(): ButtonBuilder {
    return this.actionButtonBuilder.label('Tak');
  }

  private rejectButtonBuilder(): ButtonBuilder {
    return this.actionButtonBuilder.label('Nie').style(ButtonStyle.STROKED);
  }

  private validate(): void {
    this.validateTitle();
    this.validateBody();
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
}
