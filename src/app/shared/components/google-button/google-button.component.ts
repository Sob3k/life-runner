import { Component, Input } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-google-button",
  templateUrl: "./google-button.component.html",
  styleUrls: ["./google-button.component.scss"]
})
export class GoogleButtonComponent {
  @Input() text = "Google";

  constructor(
    private auth: AuthService
  ) { }

  signInWithGoogle() {
    this.auth.signWithGoogleAccount();
  }
}
