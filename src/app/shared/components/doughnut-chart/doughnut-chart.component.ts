import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChild
} from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "emg-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.less"]
})
export class DoughnutChartComponent implements AfterViewInit {
  @Input() showLegend: boolean = true;

  @ViewChild("chart", { static: false }) chartElem: ElementRef;

  items = [];
  chart;

  constructor() {}

  ngAfterViewInit() {
    this.createChart();
  }

  randomScalingFactor() {
    let points = [];
    let leftPercentages = 100;

    for (let i = 0; i < 5; i++) {
      points.push(Math.floor(Math.random() * leftPercentages) + 1);
      leftPercentages = leftPercentages - points[i];
    }

    return points.reverse();
  }

  createChart() {
    const ctx = this.chartElem.nativeElement.getContext("2d");

    let points = this.randomScalingFactor();
    let labels = ["Red", "Orange", "Yellow", "Green", "Empty"];
    let colors = [
      "rgb(255, 99, 132)",
      "rgb(255, 159, 64)",
      "rgb(255, 205, 86)",
      "rgb(75, 192, 192)",
      "rgb(201, 203, 207)"
    ];

    for (let i = 0; i < points.length; i++) {
      this.items.push({
        label: labels[i],
        color: colors[i],
        percentages: points[i],
        index: i
      });
    }

    let data = {
      datasets: [
        {
          data: points,
          backgroundColor: colors,
          hoverBackgroundColor: colors,
          borderWidth: 0,
          label: "Dataset 1"
        }
      ],
      labels: labels
    };
    this.chart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: {
        circumference: Math.PI,
        rotation: Math.PI,
        cutoutPercentage: 50,
        responsive: true,
        weight: 0,
        legend: {
          display: false
        },
        animation: {
          animateRotate: true
        },
        tooltips: {
          filter: tooltip => {
            return tooltip.index !== points.length - 1;
          }
        }
      }
    });
  }

  update(e, item) {
    let meta = this.chart.getDatasetMeta(0);
    var result = meta.data[item.index].hidden == true ? false : true;
    meta.data[item.index].hidden = result;

    this.chart.update();
  }
}
