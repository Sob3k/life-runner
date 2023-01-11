export type WeekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
export type TrainingDayStatus = "To do" | "Free" | "Done";

export interface WeekPlan {
  weekNumber: number;
  trainings: TrainingDay[];
}

export interface TrainingDay {
  weekday: WeekDay;
  trainingId: number;
  date: Date;
  status: TrainingDayStatus;
  repsNumber: number;
  details: string;
  notes?: string;
}

export interface PlanInfo {
  planId?: number;
  weeksLength?: number;
}

export interface TrainingPlan extends PlanInfo {
  weeks: WeekPlan[];
}

export interface PlanDetails {
  repsNumber: number;
  details: string;
}
