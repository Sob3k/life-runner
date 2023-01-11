import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  isLogged = false;
  userSub: Subscription = new Subscription();

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.userSub = this.auth.user.subscribe(user => {
      this.isLogged = !!user;
    });
  }

  async ngOnDestroy(): Promise<void> {
    await this.auth.signOut();
    this.userSub.unsubscribe();
  }
}
