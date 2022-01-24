import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingFormComponent } from './training-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SimpleFormRenderer } from '@shared/forms/components/simple-form-renderer';

@NgModule({
  declarations: [ TrainingFormComponent ],
  exports: [ TrainingFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SimpleFormRenderer,
  ],
})
export class TrainingFormModule {
}
