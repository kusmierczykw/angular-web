import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePathFragment } from '@core/routing/paths';
import { AuthComponent } from '@layouts/auth';
import { DashboardComponent } from '@layouts/dashboard';
import { BlankComponent } from '@layouts/blank';
import { RouteData } from '@core/routing/data/route-data';

const routes: Routes = [
  {
    path: RoutePathFragment.AUTH,
    children: [
      {
        path: RoutePathFragment.SIGN_IN,
        component: AuthComponent,
        loadChildren: () =>
          import('@pages/auth/sign-in-page').then((m) => m.SignInPageModule),
      },
      {
        path: RoutePathFragment.SIGN_OUT,
        loadChildren: () =>
          import('@pages/auth/sign-out-page').then((m) => m.SignOutPageModule),
      },
    ],
  },
  {
    path: RoutePathFragment.DASHBOARD,
    component: DashboardComponent,
    children: [
      {
        path: '',
        data: {
          [RouteData.BREADCRUMB]: 'Dashboard',
        },
        loadChildren: () =>
          import('@pages/dashboard-page').then((m) => m.DashboardPageModule),
      },
    ],
  },
  {
    path: RoutePathFragment.GUIDEBOOK,
    loadChildren: () =>
      import('@pages/guidebook-page').then((m) => m.GuidebookPageModule),
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
      import('@pages/not-found-page').then((m) => m.NotFoundPageModule),
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
