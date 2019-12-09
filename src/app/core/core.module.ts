import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./containers/app/app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SharedModule } from "../shared/shared.module";
import { ExpensesService } from "./services/expenses.service";
import { StoreModule } from "@ngrx/store";
import { coreReducer } from "./reducers/core.reducer";
import { MaxExpenseModule } from "../features/max-expense/max-expense.module";
import { RoutingModule } from "./routing/routing.module";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    StoreModule.forRoot({ core: coreReducer }),
    SharedModule,
    MaxExpenseModule
  ],
  declarations: [AppComponent, SidebarComponent],
  providers: [ExpensesService],
  exports: [AppComponent]
})
export class CoreModule {}
