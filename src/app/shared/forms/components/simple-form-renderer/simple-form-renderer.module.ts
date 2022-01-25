import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SimpleFormRendererComponent } from '@shared/forms/components/simple-form-renderer/simple-form-renderer.component';
import { TextControlRendererComponent } from '@shared/forms/components/simple-form-renderer/fragments/text-control-renderer';
import { ActionButtonModule } from '@shared/buttons/components/action-button/action-button.module';
import { ControlRendererComponent } from '@shared/forms/components/simple-form-renderer/fragments/control-renderer';
import { DateControlRendererComponent } from '@shared/forms/components/simple-form-renderer/fragments/date-control-renderer';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SelectControlRendererComponent } from './fragments/select-control-renderer/select-control-renderer.component';

@NgModule({
  declarations: [
    SimpleFormRendererComponent,
    TextControlRendererComponent,
    ControlRendererComponent,
    DateControlRendererComponent,
    SelectControlRendererComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ActionButtonModule,
    MatDatepickerModule,
  ],
  exports: [SimpleFormRendererComponent],
})
export class SimpleFormRenderer {}
