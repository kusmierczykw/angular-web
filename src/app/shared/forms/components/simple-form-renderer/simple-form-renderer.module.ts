import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SimpleFormRendererComponent,
  TextControlRendererComponent,
} from '@shared/forms/components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SimpleFormRendererComponent, TextControlRendererComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [SimpleFormRendererComponent],
})
export class SimpleFormRenderer {}
