import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutePathFragment, RoutePathParam } from '@core/routing/paths';
import { AuthComponent } from '@layouts/auth';
import { DashboardComponent } from '@layouts/dashboard';
import { BlankComponent } from '@layouts/blank';
import { RouteData } from '@core/routing/data/route-data';
import { breadcrumbVariable } from '@shared/breadcrumbs/utils/breadcrumb-variable';
import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';

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
    path: RoutePathFragment.GUIDEBOOK,
    loadChildren: () =>
      import('@pages/guidebook/guidebook-page').then(
        (m) => m.GuidebookPageModule,
      ),
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: RoutePathFragment.DASHBOARD,
        children: [
          {
            path: '',
            data: {
              [RouteData.BREADCRUMB]: 'Dashboard',
            },
            loadChildren: () =>
              import('@pages/dashboard/dashboard-page').then(
                (m) => m.DashboardPageModule,
              ),
          },
        ],
      },
      {
        path: RoutePathFragment.PATIENTS,
        data: {
          [RouteData.BREADCRUMB]: 'Pacjenci',
        },
        children: [
          {
            path: `:${RoutePathParam.ID}`,
            data: {
              [RouteData.BREADCRUMB]: breadcrumbVariable(
                RouteBreadcrumbVariable.DETAILS,
              ),
            },
            loadChildren: () =>
              import('@pages/patient/patient-details-page').then(
                (m) => m.PatientDetailsPageModule,
              ),
          },
          {
            path: RoutePathFragment.ADD,
            loadChildren: () =>
              import('@pages/patient/patient-add-page').then(
                (m) => m.PatientAddPageModule,
              ),
          },
          {
            path: '',
            data: {
              [RouteData.BREADCRUMB]: null,
            },
            loadChildren: () =>
              import('@pages/patient/patients-page').then(
                (m) => m.PatientsPageModule,
              ),
          },
        ],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RoutePathFragment.DASHBOARD,
      },
    ],
  },
  {
    path: RoutePathFragment.NOT_FOUND,
    component: BlankComponent,
    loadChildren: () =>
      import('@pages/error/not-found-page').then((m) => m.NotFoundPageModule),
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
