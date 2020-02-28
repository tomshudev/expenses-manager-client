import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MaxExpenseComponent } from "./max-expense.component";
import { FormsModule } from "@angular/forms";
import { CountUpModule } from "countup.js-angular2";
import { NzInputNumberModule } from "ng-zorro-antd";
import { SharedModule } from "src/app/shared/shared.module";

describe("MaxExpenseComponent", () => {
  let component: MaxExpenseComponent;
  let fixture: ComponentFixture<MaxExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaxExpenseComponent],
      imports: [FormsModule, CountUpModule, NzInputNumberModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
