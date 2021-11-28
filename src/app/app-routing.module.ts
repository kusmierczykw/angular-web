import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePathFragment } from '@core/routing/paths';
import { BlankComponent } from '@layouts/blank';
import { DashboardComponent } from '@layouts/dashboard';

const routes: Routes = [
  {
    path: RoutePathFragment.SIGN_IN,
    component: BlankComponent,
    loadChildren: () =>
      import('@pages/sign-in-page/sign-in-page.module').then(
        (m) => m.SignInPageModule,
      ),
  },
  {
    path: RoutePathFragment.DASHBOARD,
    component: DashboardComponent,
    loadChildren: () =>
      import('@pages/dashboard-page/dashboard-page.module').then(
        (m) => m.DashboardPageModule,
      ),
  },
  {
    path: '',
    redirectTo: RoutePathFragment.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: RoutePathFragment.NOT_FOUND,
    component: BlankComponent,
    loadChildren: () =>
      import('@pages/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule,
      ),
  },
  {
    path: RoutePathFragment.WILDCARD,
    redirectTo: RoutePathFragment.NOT_FOUND,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
