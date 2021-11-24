import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePathFragment } from '@core/routing/paths';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: RoutePathFragment.SIGN_IN,
    loadChildren: () =>
      import('./pages/sign-in-page/sign-in-page.module').then(
        (m) => m.SignInPageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
