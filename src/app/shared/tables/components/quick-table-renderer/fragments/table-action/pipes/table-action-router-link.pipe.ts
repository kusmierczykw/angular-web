import { Pipe, PipeTransform } from '@angular/core';
import { TableActionRouterLink } from '@shared/tables/components/quick-table-renderer/types/table-action-router-link';
import { RouterLink } from '@core/routing/types/router-link';

@Pipe({
  name: 'tableActionRouterLink',
})
export class TableActionRouterLinkPipe implements PipeTransform {
  public transform<Model>(
    factory: TableActionRouterLink<Model>,
    model: Model,
  ): RouterLink {
    return factory(model);
  }
}
