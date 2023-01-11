import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "./environments/environment";
import { MaterialModule } from "./material.module";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MainContainerComponent } from "./pages/main-container/main-container.component";
import { SidemenuComponent } from "./pages/main-container/sidemenu/sidemenu.component";
import { PlanCardComponent } from "./pages/plans/plan-card/plan-card.component";
import { PlansComponent } from "./pages/plans/plans.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SignInComponent } from "./pages/sign-on/sign-in/sign-in.component";
import { SignOnComponent } from "./pages/sign-on/sign-on.component";
import { SignUpComponent } from "./pages/sign-on/sign-up/sign-up.component";
import { EditTrainingDetailsComponent } from "./shared/components/edit-training-details/edit-training-details.component";
import { GoogleButtonComponent } from "./shared/components/google-button/google-button.component";
import { LogoComponent } from "./shared/components/logo/logo.component";
import { ProfileComponent } from "./shared/components/profile/profile.component";
import { SignMethodSeparatorComponent } from "./shared/components/sign-method-separator/sign-method-separator.component";
import { SpinnerComponent } from "./shared/components/spinner/spinner.component";
import { StatusIndicatorComponent } from "./shared/components/status-indicator/status-indicator.component";
import { AuthInterceptor } from "./shared/helpers/interceptors/auth-interceptor.interceptor";
import { WeekdayStatusPipe } from "./shared/pipes/weekday-status.pipe";

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
    PlansComponent,
    ProfileComponent,
    SettingsComponent,
    PlanCardComponent,
    StatusIndicatorComponent,
    WeekdayStatusPipe,
    EditTrainingDetailsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
