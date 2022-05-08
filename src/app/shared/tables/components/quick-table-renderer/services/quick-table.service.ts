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

  public setColumns(columns: TableColumns<ColumnKey>): void {
    this.columnsSource$.next(columns);
  }

  public setActions(actions: TableActions<ActionKey, Model>): void {
    this.actionsSource$.next(actions);
  }

  public markColumnAsVisible(column: TableColumn<ColumnKey>): void {
    const { key } = column;

    this.setColumns(
      this.columnsSource$.getValue().map((current) => {
        const { key: currentKey } = current;

        if (currentKey === key) {
          current.markAsVisible();

          return current;
        }

        return current;
      }),
    );
  }

  public markColumnAsInvisible(column: TableColumn<ColumnKey>): void {
    const { key } = column;

    this.setColumns(
      this.columnsSource$.getValue().map((current) => {
        const { key: currentKey } = current;

        if (currentKey === key) {
          current.markAsInvisible();

          return current;
        }

        return current;
      }),
    );
  }
}
