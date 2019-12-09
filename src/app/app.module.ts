import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./core/containers/app/app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { CoreModule } from "./core/core.module";
import { RoutingModule } from "./core/routing/routing.module";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./core/routing/routes";

@NgModule({
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
