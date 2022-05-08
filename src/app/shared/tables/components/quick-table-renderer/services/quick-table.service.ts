import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TableColumns } from '@shared/tables/components/quick-table-renderer/types/table-columns';
import { TableActions } from '@shared/tables/components/quick-table-renderer/types/table-actions';
import { TableColumn } from '@shared/tables/components/quick-table-renderer/models/table-column';

@Injectable()
export class QuickTableService<ColumnKey, ActionKey, Model> {
  public readonly columns$!: Observable<TableColumns<ColumnKey>>;
  public readonly actions$!: Observable<TableActions<ActionKey, Model>>;

  private readonly columnsSource$ = new BehaviorSubject<
    TableColumns<ColumnKey>
  >([]);

  private readonly actionsSource$ = new BehaviorSubject<
    TableActions<ActionKey, Model>
  >([]);

  public constructor() {
    this.columns$ = this.columnsSource$.asObservable();
    this.actions$ = this.actionsSource$.asObservable();
  }

  public initColumns(columns: TableColumns<ColumnKey>): void {
    this.columnsSource$.next(columns);
  }

  public initActions(actions: TableActions<ActionKey, Model>): void {
    this.actionsSource$.next(actions);
  }

  public setColumns(columns: TableColumns<ColumnKey>): void {
    this.columnsSource$.next(columns);
  }

  public setActions(actions: TableActions<ActionKey, Model>): void {
    this.actionsSource$.next(actions);
  }

  public markColumnAsVisible(column: TableColumn<ColumnKey>): void {
    const columns = [...this.columnsSource$.getValue()];
    const { key } = column;

    this.setColumns(
      columns.map((column) => {
        if (column.key === key) {
          column.markAsVisible();
        }

        return column;
      }),
    );
  }

  public markColumnAsInvisible(column: TableColumn<ColumnKey>): void {
    const columns = [...this.columnsSource$.getValue()];
    const { key } = column;

    this.setColumns(
      columns.map((column) => {
        if (column.key === key) {
          column.markAsInvisible();
        }

        return column;
      }),
    );
  }
}
