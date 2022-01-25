import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonStylePipe } from './pipes/action-button-style.pipe';

@NgModule({
  declarations: [ActionButtonStylePipe],
  imports: [CommonModule],
  exports: [ActionButtonStylePipe],
})
export class ActionButtonModule {}
