import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PlanInfo, TrainingDay, WeekPlan } from "src/app/models/week-plan";
import { ApiService } from "src/app/services/api.service";
import { EditTrainingDetailsComponent } from "src/app/shared/components/edit-training-details/edit-training-details.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  weekPlan!: WeekPlan | null;
  planDetails!: PlanInfo | null;
  displayedColumns: string[] = ["weekday", "date", "status", "about", "actions"];
  isLoaded = false;
  weekNumber = 0;
  emptyState = false;

  constructor(
    private dialog: MatDialog,
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.loadWeek();
    this.api.getCurrentPlanDetails().subscribe(planDetails => {
      if (planDetails)
        this.planDetails = planDetails;
      if (!planDetails.weeksLength)
        this.emptyState = true;
    })
  }

  editTraining(dayPlan: TrainingDay) {
    const dialogRef = this.dialog.open(EditTrainingDetailsComponent, {
      data: {
        dayPlan,
        weekNumber: this.weekNumber
      }
    });
    dialogRef.afterClosed().subscribe(() => console.log("closed"));
  }

  loadWeek() {
    this.isLoaded = false;
    this.api.getCurrentPlanWeekTraining(this.weekNumber).subscribe(weekPlan => {
      this.weekPlan = weekPlan;
      this.isLoaded = true;
    });
  }

  loadPrevWeek() {
    if (this.weekNumber > 0) {
      this.weekNumber--;
      this.loadWeek();
    }
  }

  loadNextWeek() {
    if (this.planDetails?.weeksLength)
      if (this.weekNumber >= 0 && this.weekNumber < this.planDetails.weeksLength - 1) {
        this.weekNumber++;
        this.loadWeek();
      }
  }
}
