import { Injectable } from '@angular/core';
import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';
import { CssClass } from '@utils/types/css-class';

@Injectable({
  providedIn: 'root',
})
export class TableColumnTypeCssClassProviderService {
  private cssClasses: Record<TableColumnType, CssClass> = {
    [TableColumnType.ACTION]: 'action-column-type',
    [TableColumnType.BOOLEAN]: 'boolean-column-type',
    [TableColumnType.CURRENCY]: 'currency-column-type',
    [TableColumnType.CUSTOM]: 'custom-column-type',
    [TableColumnType.DATE]: 'date-column-type',
    [TableColumnType.DATE_TIME]: 'date-column-type-time',
    [TableColumnType.NUMBER]: 'number-column-type',
    [TableColumnType.ORDINARY]: 'ordinary-column-type',
    [TableColumnType.TEXT]: 'text-column-type',
  };

  public get(type: TableColumnType): CssClass {
    return this.cssClasses[type];
  }
}
