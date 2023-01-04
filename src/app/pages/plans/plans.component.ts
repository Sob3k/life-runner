import { Component } from "@angular/core";
import { plans } from "src/app/shared/helpers/mocks/plans";
@Component({
  selector: "app-plans",
  templateUrl: "./plans.component.html",
  styleUrls: ["./plans.component.scss"]
})
export class PlansComponent {
  plans = plans;
  selectedPlanId = 1;
}
