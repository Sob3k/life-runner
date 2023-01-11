import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { map } from "rxjs";
import { Plan } from "../models/plan";
import { UserData } from "../models/user";
import { TrainingDay, TrainingPlan, WeekPlan } from "../models/week-plan";
import { GeneratedPlan } from "../shared/helpers/plans/plans-generator";
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
    const newPlan = new GeneratedPlan(selectedPlan).getPlan();

    return Promise.all([
      this.db.object<UserData>(`${this.usersPath}/${this.currentUserUid}`).update({ selectedPlan }),
      this.db.object<TrainingPlan>(`${this.usersPath}/${this.currentUserUid}/currentPlan/`).update(newPlan)
    ]);
  }

  getCurrentPlanWeekTraining(week = 0) {
    return this.db.object<WeekPlan>(`${this.usersPath}/${this.currentUserUid}/currentPlan/weeks/${week}`).valueChanges();
  }

  getCurrentPlanDetails() {
    return this.db.object<TrainingPlan>(`${this.usersPath}/${this.currentUserUid}/currentPlan/`)
      .valueChanges().pipe(map(plan => { return { planId: plan?.planId, weeksLength: plan?.weeksLength } }));
  }

  updateTrainingInfo(weekNumber: number, trainingIndex: number, training: any) {
    return this.db.object<TrainingDay>(`${this.usersPath}/${this.currentUserUid}/currentPlan/weeks/${weekNumber}/trainings/${trainingIndex}`).update(training);
  }
}
