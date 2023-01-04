import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HistoryComponent } from "./pages/history/history.component";
import { PlansComponent } from "./pages/plans/plans.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "dashboard" },
  { path: "dashboard", component: DashboardComponent },
  { path: "history", component: HistoryComponent },
  { path: "plans", component: PlansComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
