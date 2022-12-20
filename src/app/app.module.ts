import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
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
    GoogleButtonComponent
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
