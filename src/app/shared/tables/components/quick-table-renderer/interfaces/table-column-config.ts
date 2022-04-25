import { TableCurrencyColumnConfig } from '@shared/tables/components/quick-table-renderer/models/table-currency-column-config';
import { TableBooleanColumnConfig } from '@shared/tables/components/quick-table-renderer/models/table-boolean-column-config';

export interface TableColumnConfig {
  currency?: TableCurrencyColumnConfig;
  boolean?: TableBooleanColumnConfig;
}
