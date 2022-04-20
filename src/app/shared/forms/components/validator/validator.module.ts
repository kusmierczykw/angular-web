import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationErrorsPipe } from '@shared/forms/components/validator/pipes/validation-errors.pipe';
import { ValidatorErrorsRendererComponent } from '@shared/forms/components/validator/fragments/validator-errors-renderer/validator-errors-renderer.component';

@NgModule({
  declarations: [ValidationErrorsPipe, ValidatorErrorsRendererComponent],
  imports: [CommonModule],
  exports: [ValidationErrorsPipe, ValidatorErrorsRendererComponent],
})
export class ValidatorModule {}
