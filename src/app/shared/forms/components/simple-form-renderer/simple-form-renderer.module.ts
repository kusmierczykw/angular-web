import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  SimpleFormRendererComponent
} from '@shared/forms/components/simple-form-renderer/simple-form-renderer.component';
import {
  TextControlRendererComponent
} from '@shared/forms/components/simple-form-renderer/fragments/text-control-renderer';

@NgModule({
  declarations: [ SimpleFormRendererComponent, TextControlRendererComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [ SimpleFormRendererComponent ],
})
export class SimpleFormRenderer {
}
