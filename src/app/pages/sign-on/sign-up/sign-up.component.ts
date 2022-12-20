import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

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
    password: ["", Validators.required],
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
