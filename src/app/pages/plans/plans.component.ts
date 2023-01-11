import { Component, OnInit } from "@angular/core";
import { Plan } from "src/app/models/plan";
import { ApiService } from "src/app/services/api.service";
@Component({
  selector: "app-plans",
  templateUrl: "./plans.component.html",
  styleUrls: ["./plans.component.scss"]
})
export class PlansComponent implements OnInit {
  isLoaded = false;
  plans: Plan[] = [];
  selectedPlanId: number | undefined;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getPlans()
      .subscribe(plans => {
        this.plans = plans;
        this.isLoaded = true;
      });
    this.api.getUserSelectedPlan().subscribe(
      userPlan => this.selectedPlanId = userPlan
    );
  }
}
