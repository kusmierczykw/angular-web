import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonStylePipe } from '@shared/buttons/components/button/pipes/button-style.pipe';
import { OnlyVisibleButtonsPipe } from '@shared/buttons/components/button/pipes/only-visible-buttons.pipe';

@NgModule({
  declarations: [ButtonStylePipe, OnlyVisibleButtonsPipe],
  imports: [CommonModule],
  exports: [ButtonStylePipe, OnlyVisibleButtonsPipe],
})
export class ButtonModule {}
