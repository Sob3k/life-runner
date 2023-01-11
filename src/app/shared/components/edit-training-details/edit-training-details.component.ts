import { Component, Inject, OnDestroy } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { TrainingDay, TrainingDayStatus } from "src/app/models/week-plan";
import { ApiService } from "src/app/services/api.service";
import { SpeechRecognitionService } from "src/app/services/speech-recognition.service";

@Component({
  selector: "app-edit-training-details",
  templateUrl: "./edit-training-details.component.html",
  styleUrls: ["./edit-training-details.component.scss"]
})
export class EditTrainingDetailsComponent implements OnDestroy {
  speechReconStarted = false;
  statuses: TrainingDayStatus[] = ["To do", "Free", "Done"];
  dayPlan = this.fb.group({
    status: [this.data.dayPlan.status, Validators.required],
    notes: [this.data.dayPlan.notes || ""]
  })
  sub!: Subscription;

  constructor(
    public dialogRef: MatDialogRef<EditTrainingDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { dayPlan: TrainingDay, weekNumber: number },
    private fb: FormBuilder,
    private speechRecognition: SpeechRecognitionService,
    private api: ApiService,
  ) {
    this.speechRecognition.setupSpeechRecognition();
  }

  ngOnDestroy(): void {
    this.closeSub();
  }

  async onSubmit() {
    this.closeSub();
    const { dayPlan, weekNumber } = this.data;
    const trainingIndex = dayPlan.trainingId - weekNumber * 7;
    await this.api.updateTrainingInfo(this.data.weekNumber, trainingIndex, this.dayPlan.value);
    this.dialogRef.close();
  }

  recognizeSpeech() {
    this.speechRecognition.start();
    this.initSub();
  }

  private initSub() {
    this.sub = this.speechRecognition.getText().subscribe(notes => {
      this.dayPlan.patchValue({
        notes
      });
    })
  }

  private closeSub() {
    if (this.sub) this.sub.unsubscribe();
    this.speechRecognition.stop();
  }
}
