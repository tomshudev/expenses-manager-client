import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input
} from "@angular/core";
import { fromEvent, timer, Subject } from "rxjs";
import {
  pluck,
  map,
  switchMap,
  mapTo,
  startWith,
  scan,
  takeWhile,
  tap,
  debounceTime
} from "rxjs/operators";

@Component({
  selector: "emg-max-expense",
  templateUrl: "./max-expense.component.html",
  styleUrls: ["./max-expense.component.less"]
})
export class MaxExpenseComponent implements AfterViewInit {
  @ViewChild("expenseInput", { static: false }) expenseInput;

  @Input()
  set end(endRange: number) {
    this._counterSub$.next(endRange);
  }
  @Input() countInterval = 20;
  public currentNumber = 0;
  private _counterSub$ = new Subject();

  constructor() {}

  ngAfterViewInit() {
    fromEvent(this.expenseInput.inputElement.nativeElement, "keyup").subscribe(
      () => {
        this.currentNumber = this.expenseInput.inputElement.nativeElement.value;
      }
    );
  }
}
