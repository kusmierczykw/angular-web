import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Confirmation } from '@shared/confirmations/components/confirmation/models';
import { Button } from '@shared/buttons/components/button/models';
import { ConfirmationResult } from '@shared/confirmations/components/confirmation/enum';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  public title!: string;
  public body!: string;
  public accept!: Button;
  public reject!: Button;

  public constructor(
    @Inject(MAT_DIALOG_DATA) private readonly confirmation: Confirmation,
    private readonly dialogRef: MatDialogRef<ConfirmationComponent>,
  ) {
    const { title, body, accept, reject } = this.confirmation;

    this.title = title;
    this.body = body;
    this.accept = accept;
    this.reject = reject;
  }

  public handleAcceptClick(): void {
    this.accept.command.execute();
    this.dialogRef.close(ConfirmationResult.ACCEPT);
  }

  public handleRejectClick(): void {
    this.reject.command.execute();
    this.dialogRef.close(ConfirmationResult.REJECT);
  }
}
