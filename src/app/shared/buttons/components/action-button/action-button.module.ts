import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionButtonStylePipe } from './pipes/action-button-style.pipe';
import { OnlyVisibleActionButtonsPipe } from './pipes/only-visible-action-buttons.pipe';

@NgModule({
  declarations: [ActionButtonStylePipe, OnlyVisibleActionButtonsPipe],
  imports: [CommonModule],
  exports: [ActionButtonStylePipe, OnlyVisibleActionButtonsPipe],
})
export class ActionButtonModule {}
