import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./containers/app/app.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [AppComponent, SidebarComponent],
  exports: [AppComponent]
})
export class CoreModule {}
