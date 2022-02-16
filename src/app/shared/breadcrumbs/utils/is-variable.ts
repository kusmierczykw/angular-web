import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';

export const isVariable = (
  variable: string,
): variable is RouteBreadcrumbVariable =>
  Object.values(RouteBreadcrumbVariable).find(
    (toCheck) => toCheck === variable,
  ) !== undefined;
