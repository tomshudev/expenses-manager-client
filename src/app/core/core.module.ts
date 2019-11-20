import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./containers/app/app.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AppComponent, SidebarComponent],
  exports: [AppComponent]
})
export class CoreModule {}
