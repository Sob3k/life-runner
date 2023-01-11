import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { map } from "rxjs";
import { Plan } from "../models/plan";
import { UserData } from "../models/user";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private plansPath = "/plans";
  private usersPath = "/users";
  plansRef: AngularFireList<Plan>;
  usersRef: AngularFireList<UserData>;
  currentUserUid: string;

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService,
  ) {
    this.plansRef = db.list(this.plansPath);
    this.usersRef = db.list(this.usersPath);
    this.currentUserUid = this.auth.user.value?.uid || "";
  }

  getPlans() {
    return this.plansRef.valueChanges();
  }

  getUserSelectedPlan() {
    return this.db.object<UserData>(`${this.usersPath}/${this.currentUserUid}`).valueChanges().pipe(map(userData => userData?.selectedPlan));
  }

  updateUserSelectedPlan(selectedPlan: number) {
    this.db.object<UserData>(`${this.usersPath}/${this.currentUserUid}`).update({ selectedPlan });
  }

}
