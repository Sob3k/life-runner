import { DayPlan } from "src/app/models/week-plan";

export const weekPlan: DayPlan[] = [
  { id: 1, weekday: "Monday", date: new Date(), status: "To do", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { id: 2, weekday: "Tuesday", date: new Date(), status: "Done", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { id: 3, weekday: "Wednesday", date: new Date(), status: "To do", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { id: 4, weekday: "Thursday", date: new Date(), status: "Free", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { id: 5, weekday: "Friday", date: new Date(), status: "Free", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { id: 6, weekday: "Saturday", date: new Date(), status: "To do", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { id: 7, weekday: "Sunday", date: new Date(), status: "Done", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
];
