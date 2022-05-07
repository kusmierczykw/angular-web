import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInPageComponent } from './sign-in-page.component';
import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { ImagesModule } from '@shared/images/images.module';
import { SignInFormModule } from '@modules/sign-in/components/sign-in-form/sign-in-form.module';

@NgModule({
  declarations: [SignInPageComponent],
  imports: [
    CommonModule,
    SignInPageRoutingModule,
    MatGridListModule,
    ImagesModule,
    SignInFormModule,
  ],
})
export class SignInPageModule {}
