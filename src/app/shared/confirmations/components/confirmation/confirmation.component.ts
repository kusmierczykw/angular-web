import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Confirmation } from '@shared/confirmations/components/confirmation/models';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss'],
})
export class ConfirmationComponent {
  public constructor(
    @Inject(MAT_DIALOG_DATA) private confirmation: Confirmation,
    private dialogRef: MatDialogRef<ConfirmationComponent>,
  ) {}
}
