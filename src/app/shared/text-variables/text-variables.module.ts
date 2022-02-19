import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextVariablesSubstitutionPipe } from '@shared/text-variables/pipes';

@NgModule({
  declarations: [TextVariablesSubstitutionPipe],
  exports: [TextVariablesSubstitutionPipe],
  imports: [CommonModule],
})
export class TextVariablesModule {}
