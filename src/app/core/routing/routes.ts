import { Routes } from "@angular/router";
import { MaxExpenseComponent } from "src/app/features/max-expense/containers/max-expense/max-expense.component";
import { DoughnutChartComponent } from "src/app/shared/components/doughnut-chart/doughnut-chart.component";

export const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: DoughnutChartComponent
  },
  {
    path: "max-expense",
    component: MaxExpenseComponent
  },
  { path: "**", redirectTo: "/home" }
];
