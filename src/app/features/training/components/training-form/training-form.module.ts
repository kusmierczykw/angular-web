import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingFormComponent } from './training-form.component';

@NgModule({
  declarations: [TrainingFormComponent],
  exports: [TrainingFormComponent],
  imports: [CommonModule],
})
export class TrainingFormModule {}
