import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingFormComponent } from './training-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { QuickFormRenderer } from '@shared/forms/components/quick-form-renderer/quick-form-renderer.module';

@NgModule({
  declarations: [TrainingFormComponent],
  exports: [TrainingFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    QuickFormRenderer,
  ],
})
export class TrainingFormModule {}
