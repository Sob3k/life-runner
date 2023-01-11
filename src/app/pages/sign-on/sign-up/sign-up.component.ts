import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Signup } from "src/app/models/auth";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent {
  hide = true;
  @Input() signUpMode = true;
  @Output() signUpModeChange = new EventEmitter<boolean>();
  signup = this.fb.group({
    name: ["", Validators.required],
    surname: ["", Validators.required],
    email: ["", Validators.email],
    password: ["", [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) { }

  async onSubmit() {
    try {
      await this.auth.emailSignUp(this.signup.value as Signup);
    } catch { /* empty */ }

  }

  togglePasswordVisibility(event: MouseEvent): void {
    event.preventDefault();
    this.hide = !this.hide;
  }
}
