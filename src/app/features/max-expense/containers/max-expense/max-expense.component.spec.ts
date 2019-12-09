import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxExpenseComponent } from './max-expense.component';

describe('MaxExpenseComponent', () => {
  let component: MaxExpenseComponent;
  let fixture: ComponentFixture<MaxExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
