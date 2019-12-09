import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";

@NgModule({
  imports: [RouterModule.forChild(appRoutes)]
})
export class RoutingModule {}
