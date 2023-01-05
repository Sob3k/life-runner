/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
// Workaround to get webkitSpeechRecognition API
const { webkitSpeechRecognition }: IWindow = <IWindow><unknown>window;

@Injectable({
  providedIn: "root"
})
export class SpeechRecognitionService {
  recognition = new webkitSpeechRecognition();
  recognizedWords = "";
  private text = "";
  private textChange = new Subject<string>();
  speechReconStarted = false;

  setupSpeechRecognition() {
    this.recognition.interimResults = true;
    this.recognition.lang = "en-US";
    this.addListener();
  }

  start() {
    try {
      this.speechReconStarted = true;
      this.recognition.start();
      this.recognition.addEventListener("end", () => {
        if (!this.speechReconStarted) {
          this.recognition.stop();
        } else {
          this.concatWords()
          this.recognition.start();
        }
      });
    } catch { /* empty */ }
  }

  stop() {
    this.speechReconStarted = false;
    this.concatWords()
    this.recognition.stop();
  }

  getText() {
    return this.textChange.asObservable();
  }

  private concatWords() {
    this.text = this.text + " " + this.recognizedWords;
    this.textChange.next(this.text);
    this.recognizedWords = "";
  }

  private addListener() {
    this.recognition.addEventListener("result", (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join("");
      this.recognizedWords = transcript;
    });
  }
}
