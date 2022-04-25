import { Component, Inject, Input, TemplateRef } from '@angular/core';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';
import { TableAction } from '@shared/tables/components/quick-table-renderer/models/table-action';
import { Nullish } from '@utils/types/nullish';
import { TableColumnType } from '@shared/tables/components/quick-table-renderer/enums/table-column-type';
import { TableCurrencyColumnConfig } from '@shared/tables/components/quick-table-renderer/models/table-currency-column-config';
import { ANGULAR_DATE_LOCALE_CONFIG_TOKEN } from '@core/locale/date/angular-date-locale-config-token';
import { DateLocaleConfig } from '@core/locale/date/interfaces/date-locale-config';
import { TableBooleanColumnConfig } from '@shared/tables/components/quick-table-renderer/models/table-boolean-column-config';
import { Tuple } from '@utils/types/tuple';
import { isString } from '@utils/is-string';
import { isBoolean } from '@utils/is-boolean';
import { isDate } from '@utils/is-date';
import { isNumber } from '@utils/is-number';
import { CustomCellContent } from '@shared/tables/components/quick-table-renderer/interfaces/custom-cell-content';

@Component({
  selector: 'app-cell-content',
  templateUrl: './cell-content.component.html',
  styleUrls: ['./cell-content.component.scss'],
})
export class CellContentComponent<ColumnKey, ActionKey, Model> {
  @Input() public ordinary!: number;
  @Input() public column!: TableColumn<ColumnKey>;
  @Input() public model!: Model;
  @Input() public actions: Nullish<TableAction<ActionKey, Model>[]>;
  @Input() public customCellContentTemplate?: TemplateRef<
    CustomCellContent<ColumnKey, Model>
  >;

  public readonly Type = TableColumnType;

  public constructor(
    @Inject(ANGULAR_DATE_LOCALE_CONFIG_TOKEN)
    public readonly angularDateConfig: DateLocaleConfig,
  ) {}

  public get textValue(): Nullish<string> {
    const value = this.value();

    if (!isString(value)) {
      return;
    }

    return value;
  }

  public get booleanValue(): Nullish<boolean> {
    const value = this.value();

    if (!isBoolean(value)) {
      return;
    }

    return value;
  }

  public get dateValue(): Nullish<Date> {
    const value = this.value();

    if (!isDate(value)) {
      return;
    }

    return value;
  }

  public get numberValue(): Nullish<number> {
    const value = this.value();

    if (!isNumber(value)) {
      return;
    }

    return value;
  }

  public get key(): keyof Model {
    return this.column.key as keyof Model;
  }

  public get currencyConfig(): TableCurrencyColumnConfig {
    return this.column.config.currency!;
  }

  public get booleanConfig(): TableBooleanColumnConfig {
    return this.column.config.boolean!;
  }

  public get booleanLabels(): Tuple<string> {
    return [this.booleanConfig.trueLabel, this.booleanConfig.falseLabel];
  }

  private value(): Nullish<unknown> {
    return this.model[this.key];
  }
}
