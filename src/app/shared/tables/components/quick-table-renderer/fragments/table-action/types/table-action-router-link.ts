import { RouterLink } from '@core/routing/types/router-link';

export type TableActionRouterLink<Model> = (model: Model) => RouterLink;
