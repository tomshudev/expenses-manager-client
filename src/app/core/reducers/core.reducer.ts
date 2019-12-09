import { CoreActions, CoreActionTypes } from "../actions/core.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export type CoreState = {
  maxExpense: number;
};

let initialState: CoreState = {
  maxExpense: Number.MAX_SAFE_INTEGER
};

export function coreReducer(
  state: CoreState = initialState,
  action: CoreActions
): CoreState {
  switch (action.type) {
    case CoreActionTypes.SET_MAX_EXPENSE:
      return {
        ...state,
        maxExpense: action.payload.maxExpense
      };

    default:
      return state;
  }
}

export const getState = createFeatureSelector<CoreState>("core");

export const getMaxExpense = createSelector(
  getState,
  (state: CoreState) => state.maxExpense
);
