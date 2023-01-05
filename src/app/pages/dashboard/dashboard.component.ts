import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DayPlan } from "src/app/models/week-plan";
import { EditTrainingDetailsComponent } from "src/app/shared/components/edit-training-details/edit-training-details.component";
import { weekPlan } from "src/app/shared/helpers/mocks/dashboard";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
  weekPlan = weekPlan;
  displayedColumns: string[] = ["weekday", "date", "status", "about", "actions"];

  constructor(private dialog: MatDialog) { }

  editTraining(dayPlan: DayPlan) {
    const dialogRef = this.dialog.open(EditTrainingDetailsComponent, {
      data: dayPlan
    });
    dialogRef.afterClosed().subscribe(() => console.log("closed"));
  }
}
