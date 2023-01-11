import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Signin } from "src/app/models/auth";
import { AuthService } from "src/app/services/auth.service";
import { ErrorDialogComponent } from "src/app/shared/components/error-dialog/error-dialog.component";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {
  hide = true;
  @Input() signUpMode = false;
  @Output() signUpModeChange = new EventEmitter<boolean>();
  @Output() isLoggedChange = new EventEmitter<boolean>();
  signin = this.fb.group({
    email: ["", Validators.email],
    password: ["", [Validators.required, Validators.minLength(6)]]
  })


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private dialog: MatDialog
  ) { }

  async onSubmit() {
    try {
      await this.auth.emailSignIn(this.signin.value as Signin)
      this.isLoggedChange.emit(true);
    } catch {
      this.dialog.open(ErrorDialogComponent, { data: { message: "Invalid credentials" } })
    }
  }

  togglePasswordVisibility(event: MouseEvent): void {
    event.preventDefault();
    this.hide = !this.hide;
  }
}
