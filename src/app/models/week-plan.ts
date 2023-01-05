export type WeekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
export type TrainingDayStatus = "To do" | "Free" | "Done";

export interface DayPlan {
  id: number;
  weekday: WeekDay;
  date: Date;
  status: TrainingDayStatus;
  repsNumber: number;
  details: string;
  notes?: string;
}
