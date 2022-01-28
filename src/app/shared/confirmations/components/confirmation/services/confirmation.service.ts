import { Injectable } from '@angular/core';
import { ConfirmationBuilder } from '@shared/confirmations/components/confirmation/builders';
import { Confirmation } from '@shared/confirmations/components/confirmation/models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '@shared/confirmations/components/confirmation';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  public constructor(
    private readonly confirmationBuilder: ConfirmationBuilder,
    private readonly dialog: MatDialog,
  ) {}

  public show(factory: (builder: ConfirmationBuilder) => Confirmation): void {
    const confirmation = factory(this.confirmationBuilder);

    this.dialog.open(ConfirmationComponent, { data: confirmation });
  }
}
