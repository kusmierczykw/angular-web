import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Confirmation } from '@shared/confirmations/components/confirmation/models';
import { ActionButton } from '@shared/buttons/components/action-button/models';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  public title!: string;
  public body!: string;
  public accept!: ActionButton;
  public reject!: ActionButton;

  public constructor(
    @Inject(MAT_DIALOG_DATA) private readonly confirmation: Confirmation,
    private dialogRef: MatDialogRef<ConfirmationComponent>,
  ) {
    const { title, body, accept, reject } = this.confirmation;

    this.title = title;
    this.body = body;
    this.accept = accept;
    this.reject = reject;
  }

  public handleAcceptClick(): void {
    this.accept.command.execute();

    this.dialogRef.close();
  }

  public handleRejectClick(): void {
    this.accept.command.execute();
    this.dialogRef.close();
  }
}
