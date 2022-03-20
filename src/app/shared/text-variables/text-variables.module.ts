import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextVariablesSubstitutionPipe } from '@shared/text-variables/pipes/text-variables-substitution.pipe';

@NgModule({
  declarations: [TextVariablesSubstitutionPipe],
  exports: [TextVariablesSubstitutionPipe],
  imports: [CommonModule],
})
export class TextVariablesModule {}
