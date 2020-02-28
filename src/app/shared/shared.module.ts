import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoughnutChartComponent } from "./components/doughnut-chart/doughnut-chart.component";
import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  imports: [CommonModule],
  declarations: [DoughnutChartComponent, ButtonComponent],
  exports: [DoughnutChartComponent, ButtonComponent]
})
export class SharedModule {}
