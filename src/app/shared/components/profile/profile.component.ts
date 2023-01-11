import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  user!: User;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.user.value as User;
  }

  async signOut() {
    await this.auth.signOut();
  }
}
