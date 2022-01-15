import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePathFragment } from '@core/routing/paths';
import { AuthComponent } from '@layouts/auth';
import { DashboardComponent } from '@layouts/dashboard';
import { BlankComponent } from '@layouts/blank';
import { RouteData } from '@core/routing/data/route-data';

const routes: Routes = [
  {
    path: RoutePathFragment.SIGN_IN,
    component: AuthComponent,
    loadChildren: () =>
      import('@pages/sign-in-page/sign-in-page.module').then(
        (m) => m.SignInPageModule,
      ),
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
          import('@pages/dashboard-page/dashboard-page.module').then(
            (m) => m.DashboardPageModule,
          ),
      },
      {
        path: RoutePathFragment.TRAININGS,
        data: {
          [RouteData.BREADCRUMB]: 'Trening',
        },
        loadChildren: () =>
          import('@pages/trainings-page/trainings-page.module').then(
            (m) => m.TrainingsPageModule,
          ),
      },
    ],
  },
  {
    path: RoutePathFragment.GUIDEBOOK,
    loadChildren: () =>
      import('@pages/guidebook-page/guidebook-page.module').then(
        (m) => m.GuidebookPageModule,
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
