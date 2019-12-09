import { Component } from "@angular/core";
import { ExpensesService } from "../../services/expenses.service";
import { Store } from "@ngrx/store";
import { CoreState } from "../../reducers/core.reducer";
import { slideInAnimation } from "../../routing/routing-animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  animations: [slideInAnimation]
})
export class AppComponent {
  constructor(
    private store: Store<CoreState>,
    private expensesService: ExpensesService
  ) {
    this.expensesService.printExpense();
  }
}
