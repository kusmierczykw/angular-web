import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteData } from '@core/routing/data/route-data';
import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';
import { RoutePathFragment } from '@core/routing/paths/route-path-fragment';
import { AuthComponent } from '@layouts/auth/auth.component';
import { DashboardComponent } from '@layouts/dashboard/dashboard.component';
import { RoutePathParam } from '@core/routing/paths/route-path-param';
import { BlankComponent } from '@layouts/blank/blank.component';

const routes: Routes = [
  {
    path: RoutePathFragment.AUTH,
    children: [
      {
        path: RoutePathFragment.SIGN_IN,
        component: AuthComponent,
        children: [
          {
            path: '',
            loadComponent: () =>
              import('@pages/auth/sign-in-page/sign-in-page.component').then(
                (c) => c.SignInPageComponent,
              ),
          },
        ],
      },
      {
        path: RoutePathFragment.SIGN_OUT,
        loadComponent: () =>
          import('@pages/auth/sign-out-page/sign-out-page.component').then(
            (c) => c.SignOutPageComponent,
          ),
      },
    ],
  },
  {
    path: RoutePathFragment.GUIDEBOOK,
    loadComponent: () =>
      import('@pages/guidebook/guidebook-page/guidebook-page.component').then(
        (c) => c.GuidebookPageComponent,
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
            loadComponent: () =>
              import(
                '@pages/dashboard/dashboard-page/dashboard-page.component'
              ).then((c) => c.DashboardPageComponent),
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
            path: RoutePathFragment.ADD,
            data: {
              [RouteData.BREADCRUMB]: 'Dodaj',
            },
            loadComponent: () =>
              import(
                '@pages/patient/patient-add-page/patient-add-page.component'
              ).then((c) => c.PatientAddPageComponent),
          },
          {
            path: `:${RoutePathParam.ID}`,
            data: {
              [RouteData.BREADCRUMB]: `Użytkownik ${RouteBreadcrumbVariable.FIRST_NAME} ${RouteBreadcrumbVariable.LAST_NAME}`,
            },
            loadComponent: () =>
              import(
                '@pages/patient/patient-details-page/patient-details-page.component'
              ).then((c) => c.PatientDetailsPageComponent),
          },
          {
            path: '',
            data: {
              [RouteData.BREADCRUMB]: null,
            },
            loadComponent: () =>
              import(
                '@pages/patient/patients-page/patients-page.component'
              ).then((c) => c.PatientsPageComponent),
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
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@pages/error/not-found-page/not-found-page.component').then(
            (c) => c.NotFoundPageComponent,
          ),
      },
    ],
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
