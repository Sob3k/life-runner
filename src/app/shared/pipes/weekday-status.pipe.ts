import { Pipe, PipeTransform } from "@angular/core";
import { TrainingDayStatus } from "src/app/models/week-plan";
import { IconStatus } from "../components/status-indicator/status-indicator.component";

@Pipe({
  name: "weekdayStatus"
})
export class WeekdayStatusPipe implements PipeTransform {

  transform(value: TrainingDayStatus): IconStatus {
    switch (value) {
      case "To do": return "error";
      case "Done": return "ok";
      case "Free": return "normal";
    }
  }

}
