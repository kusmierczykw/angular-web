import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { QuickFormRendererComponent } from '@shared/forms/quick-form-renderer/quick-form-renderer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SelectControlRendererComponent } from './fragments/controls/select-control-renderer/select-control-renderer.component';
import { ButtonModule } from '@shared/buttons/components/button/button.module';
import { NumberControlRendererComponent } from './fragments/controls/number-control-renderer/number-control-renderer.component';
import { MatSelectModule } from '@angular/material/select';
import { TextControlRendererComponent } from '@shared/forms/quick-form-renderer/fragments/controls/text-control-renderer/text-control-renderer.component';
import { ControlRendererComponent } from '@shared/forms/quick-form-renderer/fragments/controls/control-renderer/control-renderer.component';
import { DateControlRendererComponent } from '@shared/forms/quick-form-renderer/fragments/controls/date-control-renderer/date-control-renderer.component';
import { ConfirmationModule } from '@shared/confirmations/components/confirmation/confirmation.module';
import { ValidatorModule } from '@shared/forms/validator/validator.module';

@NgModule({
  declarations: [
    QuickFormRendererComponent,
    TextControlRendererComponent,
    ControlRendererComponent,
    DateControlRendererComponent,
    SelectControlRendererComponent,
    NumberControlRendererComponent,
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
    ValidatorModule,
  ],
  exports: [QuickFormRendererComponent],
})
export class QuickFormRenderer {}
