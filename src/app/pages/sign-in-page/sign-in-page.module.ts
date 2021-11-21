import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page.component';
import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImageModule } from '@core/image/image.module';
import { SignInFormModule } from '@features/auth/sign-in/components/sign-in-form';

@NgModule({
  declarations: [SignInPageComponent],
  imports: [
    CommonModule,
    SignInPageRoutingModule,
    MatGridListModule,
    ImageModule,
    SignInFormModule,
  ],
})
export class SignInPageModule {}
