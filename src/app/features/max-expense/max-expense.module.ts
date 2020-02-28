import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountUpModule } from "countup.js-angular2";
import { NzInputNumberModule } from "ng-zorro-antd/input-number";
import { MaxExpenseComponent } from "./containers/max-expense/max-expense.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [MaxExpenseComponent],
  imports: [
    CommonModule,
    FormsModule,
    CountUpModule,
    NzInputNumberModule,
    SharedModule
  ],
  exports: [MaxExpenseComponent]
})
export class MaxExpenseModule {}
