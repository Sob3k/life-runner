import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { TrainingDay } from "src/app/models/week-plan";
import { EditTrainingDetailsComponent } from "src/app/shared/components/edit-training-details/edit-training-details.component";
import { weekPlan } from "src/app/shared/helpers/mocks/dashboard";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements AfterViewInit {
  weekPlanDataSource = weekPlan;
  weekPlan!: MatTableDataSource<TrainingDay>;
  displayedColumns: string[] = ["weekday", "date", "status", "about", "actions"];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {
    this.weekPlan = new MatTableDataSource(this.weekPlanDataSource);
  }

  ngAfterViewInit() {
    this.weekPlan.paginator = this.paginator;
  }

  editTraining(dayPlan: TrainingDay) {
    const dialogRef = this.dialog.open(EditTrainingDetailsComponent, {
      data: dayPlan
    });
    dialogRef.afterClosed().subscribe(() => console.log("closed"));
  }
}
