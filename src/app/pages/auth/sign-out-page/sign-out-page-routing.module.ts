import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOutPageComponent } from '@pages/auth/sign-out-page/sign-out-page.component';

const routes: Routes = [
  {
    path: '',
    component: SignOutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignOutPageRoutingModule {}
