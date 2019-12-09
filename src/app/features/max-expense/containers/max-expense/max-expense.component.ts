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
  @ViewChild("expenseInput", { static: false }) expenseInput: ElementRef;

  @Input()
  set end(endRange: number) {
    this._counterSub$.next(endRange);
  }
  @Input() countInterval = 20;
  public currentNumber = 0;
  private _counterSub$ = new Subject();

  constructor() {}

  ngAfterViewInit() {
    fromEvent(this.expenseInput.nativeElement, "keyup")
      // .pipe(debounceTime(300))
      .subscribe(() => {
        this._counterSub$.next(this.expenseInput.nativeElement.value);
      });

    this._counterSub$
      .pipe(
        switchMap(endRange => {
          return timer(0, this.countInterval).pipe(
            mapTo(this.positiveOrNegative(endRange, this.currentNumber)),
            startWith(this.currentNumber),
            scan((acc: number, curr: number) => acc + curr),
            takeWhile(this.isApproachingRange(endRange, this.currentNumber))
          );
        })
        // takeUntil(this._onDestroy$)
      )
      .subscribe((val: number) => (this.currentNumber = val));
  }

  private positiveOrNegative(endRange, currentNumber) {
    return endRange > currentNumber ? 1 : -1;
  }

  private isApproachingRange(endRange, currentNumber) {
    return endRange > currentNumber
      ? val => val <= endRange
      : val => val >= endRange;
  }
}
