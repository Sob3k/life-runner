import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-sign-on",
  templateUrl: "./sign-on.component.html",
})
export class SignOnComponent {
  signUpMode = false;
  @Output() isLoggedChange = new EventEmitter<boolean>();
}
