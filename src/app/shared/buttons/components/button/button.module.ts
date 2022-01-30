import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonStylePipe,
  OnlyVisibleButtonsPipe,
} from '@shared/buttons/components/button/pipes';

@NgModule({
  declarations: [ButtonStylePipe, OnlyVisibleButtonsPipe],
  imports: [CommonModule],
  exports: [ButtonStylePipe, OnlyVisibleButtonsPipe],
})
export class ButtonModule {}
