import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesSubstitutionPipe } from '@shared/values-substitution/pipes/values-substitution.pipe';

@NgModule({
  declarations: [ValuesSubstitutionPipe],
  exports: [ValuesSubstitutionPipe],
  imports: [CommonModule],
})
export class ValuesSubstitutionModule {}
