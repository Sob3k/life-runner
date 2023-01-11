import { PlanDetails, TrainingDay, TrainingPlan, WeekDay, WeekPlan } from "../../../models/week-plan";

export class GeneratedPlan {
  private plan!: TrainingPlan;

  constructor(private planId: number) {
    this.generatePlan();
  }

  private generatePlan(): void {
    const weeksLength = this.getPlanWeeksLengthById(this.planId);
    const weeks: WeekPlan[] = [];
    for (let i = 0; i < weeksLength; i++) {
      const trainingDays: TrainingDay[] = [];
      for (let j = 0; j < 7; j++) {
        const trainingDate = new Date(Date.now() + (i * 7 + j) * 24 * 60 * 60 * 1000)
        trainingDays.push({
          date: trainingDate,
          ...this.getPlanDetailsById(this.planId),
          status: j % 2 == 0 ? "To do" : "Free",
          trainingId: i * 7 + j,
          weekday: this.getWeekDay(trainingDate.getDay()),
          notes: "",
        })
      }
      weeks.push({ trainings: trainingDays, weekNumber: i });
    }
    const generatedPlan: TrainingPlan = {
      planId: this.planId,
      weeksLength, weeks
    };
    this.plan = generatedPlan;
  }

  private getPlanWeeksLengthById(planId: number): number {
    switch (planId) {
      case 1: return 10;
      case 2: return 18;
      case 3: return 24;
      default: return 10;
    }
  }

  private getPlanDetailsById(planId: number): PlanDetails {
    switch (planId) {
      case 1: return { repsNumber: 3, details: "1 minute of walking + 1 minute of running" };
      case 2: return { repsNumber: 8, details: "2 minute of walking + 3 minute of running" };
      case 3: return { repsNumber: 12, details: "2 minute of walking + 6 minute of running" };
      default: return { repsNumber: 3, details: "1 minute of walking + 1 minute of running" };
    }
  }

  private getWeekDay(dayNumber: number): WeekDay {
    switch (dayNumber) {
      case 0: return "Sunday";
      case 1: return "Monday";
      case 2: return "Tuesday";
      case 3: return "Wednesday";
      case 4: return "Thursday";
      case 5: return "Friday";
      case 6: return "Saturday";
      default: return "Monday";
    }
  }

  getPlan() {
    return this.plan;
  }
}
