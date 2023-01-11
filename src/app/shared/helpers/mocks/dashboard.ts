import { TrainingDay } from "src/app/models/week-plan";

export const weekPlan: TrainingDay[] = [
  { trainingId: 1, weekday: "Monday", date: new Date(), status: "To do", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { trainingId: 2, weekday: "Tuesday", date: new Date(), status: "Done", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { trainingId: 3, weekday: "Wednesday", date: new Date(), status: "To do", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { trainingId: 4, weekday: "Thursday", date: new Date(), status: "Free", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { trainingId: 5, weekday: "Friday", date: new Date(), status: "Free", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { trainingId: 6, weekday: "Saturday", date: new Date(), status: "To do", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
  { trainingId: 7, weekday: "Sunday", date: new Date(), status: "Done", repsNumber: 3, details: "1 minute of walking + 1 minute of running" },
];
