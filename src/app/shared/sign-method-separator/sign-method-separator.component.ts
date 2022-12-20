import { Component, Input } from "@angular/core";

@Component({
  selector: "app-sign-method-separator",
  templateUrl: "./sign-method-separator.component.html",
  styleUrls: ["./sign-method-separator.component.scss"]
})
export class SignMethodSeparatorComponent {
  @Input() value = "";

}
