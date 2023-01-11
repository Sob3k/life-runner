import { Injectable, OnDestroy } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { map, of, Subscription } from "rxjs";
import { Plan } from "../models/plan";
import { UserData } from "../models/user";
import { TrainingDay, TrainingPlan, WeekPlan } from "../models/week-plan";
import { GeneratedPlan } from "../shared/helpers/plans/plans-generator";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class ApiService implements OnDestroy {
  private plansPath = "/plans";
  private usersPath = "/users";
  plansRef: AngularFireList<Plan>;
  usersRef: AngularFireList<UserData>;
  currentUserUid: string;
  authSub: Subscription = new Subscription;

  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService,
  ) {
    this.plansRef = db.list(this.plansPath);
    this.usersRef = db.list(this.usersPath);
    this.currentUserUid = this.auth.user.value?.uid || "";
    this.authSub = this.auth.user.subscribe(() => {
      this.setCurrentUserId();
    })
  }

  ngOnDestroy() {
    if (this.authSub)
      this.authSub.unsubscribe();
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
    if (!this.currentUserUid) { return of(null) }
    return this.db.object<WeekPlan>(`${this.usersPath}/${this.currentUserUid}/currentPlan/weeks/${week}`).valueChanges();
  }

  getCurrentPlanDetails() {
    return this.db.object<TrainingPlan>(`${this.usersPath}/${this.currentUserUid}/currentPlan/`)
      .valueChanges().pipe(map(plan => { return { planId: plan?.planId, weeksLength: plan?.weeksLength } }));
  }

  updateTrainingInfo(weekNumber: number, trainingIndex: number, training: any) {
    return this.db.object<TrainingDay>(`${this.usersPath}/${this.currentUserUid}/currentPlan/weeks/${weekNumber}/trainings/${trainingIndex}`).update(training);
  }

  private setCurrentUserId() {
    let userKeys: any[] = [];
    let users: any[] = [];
    this.usersRef.snapshotChanges().subscribe(data => {
      userKeys = data.map(data => data.key);
      this.usersRef.valueChanges().subscribe(data => {
        users = data.map(data => data.uid);
        const index = users.indexOf(this.auth.user.value?.uid);
        const currentUserId = userKeys[index];
        this.currentUserUid = currentUserId;
      });
    });
  }
}
