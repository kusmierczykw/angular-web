import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { QuickFormRendererComponent } from '@shared/forms/components/quick-form-renderer/quick-form-renderer.component';
import { TextControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/text-control-renderer';
import { ControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/control-renderer';
import { DateControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/date-control-renderer';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SelectControlRendererComponent } from './fragments/select-control-renderer/select-control-renderer.component';
import { ButtonModule } from '@shared/buttons/components/button/button.module';
import { ConfirmationModule } from '@shared/confirmations/components/confirmation';

@NgModule({
  declarations: [
    QuickFormRendererComponent,
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
    MatDatepickerModule,
    ButtonModule,
    ConfirmationModule,
  ],
  exports: [QuickFormRendererComponent],
})
export class QuickFormRenderer {}
