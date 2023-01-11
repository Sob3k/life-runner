import { Component, Input } from "@angular/core";
import { Plan } from "src/app/models/plan";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-plan-card",
  templateUrl: "./plan-card.component.html",
  styleUrls: ["./plan-card.component.scss"]
})
export class PlanCardComponent {
  @Input() plan!: Plan;
  @Input() selected = false;

  constructor(
    private api: ApiService
  ) { }

  selectPlan(id: number) {
    try {
      this.api.updateUserSelectedPlan(id);
    } catch { /* empty */ }
  }
}
