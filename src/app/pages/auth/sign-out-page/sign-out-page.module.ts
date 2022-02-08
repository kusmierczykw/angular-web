import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOutPageRoutingModule } from './sign-out-page-routing.module';
import { SignOutPageComponent } from './sign-out-page.component';

@NgModule({
  declarations: [SignOutPageComponent],
  imports: [CommonModule, SignOutPageRoutingModule],
})
export class SignOutPageModule {}
