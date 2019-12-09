import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { CoreState, getMaxExpense } from "../reducers/core.reducer";
import { SetMaxExpense } from "../actions/core.actions";

@Injectable({
  providedIn: "root"
})
export class ExpensesService {
  maxExpense = this.store
    .select(getMaxExpense)
    .pipe(tap(val => console.log(val)))
    .subscribe();

  constructor(private store: Store<CoreState>) {
    this.store.dispatch(new SetMaxExpense({ maxExpense: 5000 }));
  }

  printExpense() {
    console.log(this.maxExpense);
  }
}
