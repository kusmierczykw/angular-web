import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanPipe } from './pipes/boolean.pipe';

@NgModule({
  declarations: [BooleanPipe],
  exports: [BooleanPipe],
  imports: [CommonModule],
})
export class BooleanModule {}
