import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { QuickFormRendererComponent } from '@shared/forms/components/quick-form-renderer/quick-form-renderer.component';
import { TextControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/controls/text-control-renderer';
import { ControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/controls/control-renderer';
import { DateControlRendererComponent } from '@shared/forms/components/quick-form-renderer/fragments/controls/date-control-renderer';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SelectControlRendererComponent } from './fragments/controls/select-control-renderer/select-control-renderer.component';
import { ButtonModule } from '@shared/buttons/components/button/button.module';
import { ConfirmationModule } from '@shared/confirmations/components/confirmation';
import { NumberControlRendererComponent } from './fragments/controls/number-control-renderer/number-control-renderer.component';
import { MatSelectModule } from '@angular/material/select';
import { ValidationErrorsPipe } from './pipes/validation-errors.pipe';

@NgModule({
  declarations: [
    QuickFormRendererComponent,
    TextControlRendererComponent,
    ControlRendererComponent,
    DateControlRendererComponent,
    SelectControlRendererComponent,
    NumberControlRendererComponent,
    ValidationErrorsPipe,
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
    MatSelectModule,
  ],
  exports: [QuickFormRendererComponent],
})
export class QuickFormRenderer {}
