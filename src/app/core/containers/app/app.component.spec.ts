import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { coreReducer } from "../../reducers/core.reducer";
import { appRoutes } from "../../routing/routes";
import { MaxExpenseModule } from "src/app/features/max-expense/max-expense.module";
import { ExpensesService } from "../../services/expenses.service";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SidebarComponent],
      providers: [ExpensesService],
      imports: [
        MaxExpenseModule,
        SharedModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot({ core: coreReducer })
      ]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
