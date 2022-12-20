import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent {
  hide = true;
  @Input() signUpMode = false;
  @Output() signUpModeChange = new EventEmitter<boolean>();
  signin = this.fb.group({
    email: ["", Validators.email],
    password: ["", Validators.required]
  })

  constructor(
    private fb: FormBuilder
  ) { }

  onSubmit() {
    console.log("on submit logic");
  }

  togglePasswordVisibility(event: MouseEvent): void {
    event.preventDefault();
    this.hide = !this.hide;
  }
}
