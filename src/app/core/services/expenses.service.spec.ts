import { TestBed } from "@angular/core/testing";

import { ExpensesService } from "./expenses.service";
import { StoreModule } from "@ngrx/store";
import { coreReducer } from "../reducers/core.reducer";

describe("ExpensesService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ core: coreReducer })]
    })
  );

  it("should be created", () => {
    const service: ExpensesService = TestBed.get(ExpensesService);
    expect(service).toBeTruthy();
  });
});
