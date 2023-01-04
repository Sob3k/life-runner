import { Component, Input } from "@angular/core";
import { Plan } from "src/app/models/plan";

@Component({
  selector: "app-plan-card",
  templateUrl: "./plan-card.component.html",
  styleUrls: ["./plan-card.component.scss"]
})
export class PlanCardComponent {
  @Input() plan!: Plan;
  @Input() selected = false;
}
