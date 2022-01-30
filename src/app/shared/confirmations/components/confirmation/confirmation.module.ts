import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from '@shared/buttons/components/button/button.module';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, ButtonModule],
})
export class ConfirmationModule {}
