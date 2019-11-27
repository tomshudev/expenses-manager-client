import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoughnutChartComponent } from "./components/doughnut-chart/doughnut-chart.component";

@NgModule({
  imports: [CommonModule],
  declarations: [DoughnutChartComponent],
  exports: [DoughnutChartComponent]
})
export class SharedModule {}
