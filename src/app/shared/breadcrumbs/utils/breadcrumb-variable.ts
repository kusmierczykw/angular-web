import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';

export const breadcrumbVariable = (variable: RouteBreadcrumbVariable) => {
  return `{${variable}}`;
};
