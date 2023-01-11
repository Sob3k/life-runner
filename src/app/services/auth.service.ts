import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import * as firebaseAuth from "firebase/auth";
import { BehaviorSubject } from "rxjs";
import { Signin, Signup } from "../models/auth";
import { Settings } from "../models/settings";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(
    private afAuth: AngularFireAuth,
    private ng: NgZone,
    private router: Router,

  ) {
    this.afAuth.authState.subscribe(async user => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        this.user.next({
          displayName,
          uid,
          email,
          photoURL,
          token: await user?.getIdToken(),
        })
      }
    });
  }

  private async OAuthProvider(provider: firebaseAuth.GoogleAuthProvider) {
    await this.afAuth.signInWithPopup(provider)
  }

  // Google signin/singup
  async signWithGoogleAccount() {
    this.ng.run(() => this.router.navigateByUrl("/dashboard"));
    return this.OAuthProvider(new firebaseAuth.GoogleAuthProvider);
  }

  async emailSignUp(signup: Signup) {
    const { name, surname, email, password, } = signup;
    return Promise.all([
      await this.afAuth.createUserWithEmailAndPassword(email, password),
      (await this.afAuth.currentUser)?.updateProfile({
        displayName: `${name} ${surname}`,
      })
    ])
  }

  async emailSignIn(signin: Signin) {
    const { email, password } = signin;
    this.ng.run(() => this.router.navigateByUrl("/dashboard"));
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    this.user.next(null);
    return this.afAuth.signOut();
  }

  async updateProfileInfo(settings: Settings) {
    const { name, surname, email, } = settings;
    (await this.afAuth.currentUser)?.updateProfile({
      displayName: `${name} ${surname}`,
    });
    (await this.afAuth.currentUser)?.updateEmail(email);
  }
}
