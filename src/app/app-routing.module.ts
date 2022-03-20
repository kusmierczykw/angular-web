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
        loadChildren: () =>
          import('@pages/auth/sign-in-page/sign-in-page.module').then(
            (m) => m.SignInPageModule,
          ),
      },
      {
        path: RoutePathFragment.SIGN_OUT,
        loadChildren: () =>
          import('@pages/auth/sign-out-page/sign-out-page.module').then(
            (m) => m.SignOutPageModule,
          ),
      },
    ],
  },
  {
    path: RoutePathFragment.GUIDEBOOK,
    loadChildren: () =>
      import('@pages/guidebook/guidebook-page/guidebook-page.module').then(
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
              import(
                '@pages/dashboard/dashboard-page/dashboard-page.module'
              ).then((m) => m.DashboardPageModule),
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
            loadChildren: () =>
              import(
                '@pages/patient/patient-add-page/patient-add-page.module'
              ).then((m) => m.PatientAddPageModule),
          },
          {
            path: `:${RoutePathParam.ID}`,
            data: {
              [RouteData.BREADCRUMB]: `Użytkownik ${RouteBreadcrumbVariable.FIRST_NAME} ${RouteBreadcrumbVariable.LAST_NAME}`,
            },
            loadChildren: () =>
              import(
                '@pages/patient/patient-details-page/patient-details-page.module'
              ).then((m) => m.PatientDetailsPageModule),
          },
          {
            path: '',
            data: {
              [RouteData.BREADCRUMB]: null,
            },
            loadChildren: () =>
              import('@pages/patient/patients-page/patients-page.module').then(
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
      import('@pages/error/not-found-page/not-found-page.module').then(
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
