import { RouteBreadcrumbVariable } from '@core/routing/data/route-breadcrumb-variable';

export class ValueNotSetForVariableException extends Error {
  public constructor(variable: RouteBreadcrumbVariable) {
    super(`The value for ${variable} does not set.`);
  }
}
