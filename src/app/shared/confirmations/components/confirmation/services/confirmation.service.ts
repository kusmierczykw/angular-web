import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Confirmation } from '@shared/confirmations/components/confirmation/models/confirmation';
import { ConfirmationResult } from '@shared/confirmations/components/confirmation/enum/confirmation.result';
import { ConfirmationBuilder } from '@shared/confirmations/components/confirmation/builders/confirmation-builder';
import { ConfirmationComponent } from '@shared/confirmations/components/confirmation/confirmation.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
  public constructor(
    private readonly confirmationBuilder: ConfirmationBuilder,
    private readonly dialog: MatDialog,
  ) {}

  public show(
    factory: (builder: ConfirmationBuilder) => Confirmation,
  ): Observable<ConfirmationResult> {
    const confirmation = factory(this.confirmationBuilder);
    const { config } = confirmation;

    return this.dialog
      .open(ConfirmationComponent, { ...config, data: confirmation })
      .afterClosed();
  }
}
