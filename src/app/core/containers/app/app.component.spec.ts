import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { SharedModule } from "src/app/shared/shared.module";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SidebarComponent],
      imports: [SharedModule]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
