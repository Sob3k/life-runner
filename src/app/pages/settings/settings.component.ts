import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Settings } from "src/app/models/settings";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  hide = true;
  isLoaded = false;
  settings = this.fb.group({
    name: ["", Validators.required],
    surname: ["", Validators.required],
    email: ["", Validators.email],
  })


  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    const user: User = this.auth.user.value as User;
    if (user.displayName) {
      const [name, surname] = user.displayName.split(" ");
      this.settings.patchValue({
        name, surname,
        email: user.email
      })
    }
    this.isLoaded = true;
  }

  async onSubmit() {
    try {
      this.isLoaded = false;
      await this.auth.updateProfileInfo(this.settings.value as Settings);
      this.isLoaded = true;
    } catch { /* empty */ }
  }
}
