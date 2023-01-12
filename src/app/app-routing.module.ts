import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HomeComponent } from "./pages/home/home.component";
import { PlansComponent } from "./pages/plans/plans.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SignOnComponent } from "./pages/sign-on/sign-on.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "plans", component: PlansComponent },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
