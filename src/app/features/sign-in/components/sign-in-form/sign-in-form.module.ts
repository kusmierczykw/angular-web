import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './sign-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SignInFormComponent],
  exports: [SignInFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class SignInFormModule {}
