import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "emg-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.less"]
})
export class ButtonComponent implements OnInit {
  @Input() text: string;

  @Output() onClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
