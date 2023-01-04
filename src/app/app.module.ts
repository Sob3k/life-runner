import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HistoryComponent } from "./pages/history/history.component";
import { MainContainerComponent } from "./pages/main-container/main-container.component";
import { SidemenuComponent } from "./pages/main-container/sidemenu/sidemenu.component";
import { PlansComponent } from "./pages/plans/plans.component";
import { SignInComponent } from "./pages/sign-on/sign-in/sign-in.component";
import { SignOnComponent } from "./pages/sign-on/sign-on.component";
import { SignUpComponent } from "./pages/sign-on/sign-up/sign-up.component";
import { LogoComponent } from "./shared/components/logo/logo.component";
import { GoogleButtonComponent } from "./shared/google-button/google-button.component";
import { SignMethodSeparatorComponent } from "./shared/sign-method-separator/sign-method-separator.component";

@NgModule({
  declarations: [
    AppComponent,
    SignOnComponent,
    SignUpComponent,
    SignInComponent,
    LogoComponent,
    SignMethodSeparatorComponent,
    GoogleButtonComponent,
    MainContainerComponent,
    SidemenuComponent,
    DashboardComponent,
    HistoryComponent,
    PlansComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
