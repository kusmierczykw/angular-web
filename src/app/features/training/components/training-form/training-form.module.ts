import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingFormComponent } from './training-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TrainingFormComponent],
  exports: [TrainingFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TrainingFormModule {}
