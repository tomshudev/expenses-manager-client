import { Action } from "@ngrx/store";

export enum CoreActionTypes {
  SET_MAX_EXPENSE = "[Core] Set Max Expense"
}

export class SetMaxExpense implements Action {
  readonly type = CoreActionTypes.SET_MAX_EXPENSE;

  constructor(public payload: { maxExpense: number }) {}
}

export type CoreActions = SetMaxExpense;
