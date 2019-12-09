import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaxExpenseComponent } from "./containers/max-expense/max-expense.component";

@NgModule({
  declarations: [MaxExpenseComponent],
  imports: [CommonModule],
  exports: [MaxExpenseComponent]
})
export class MaxExpenseModule {}
