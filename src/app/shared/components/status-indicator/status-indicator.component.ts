import { Component, Input } from "@angular/core";

export type IconStatus = "ok" | "normal" | "error";

@Component({
  selector: "app-status-indicator",
  templateUrl: "./status-indicator.component.html",
  styleUrls: ["./status-indicator.component.scss"]
})
export class StatusIndicatorComponent {
  @Input() status!: IconStatus;
  @Input() message!: string;

}
