import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import * as firebaseAuth from "firebase/auth";
import { BehaviorSubject } from "rxjs";
import { Signin, Signup } from "../models/auth";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(
    private afAuth: AngularFireAuth,
  ) {
    this.afAuth.authState.subscribe(async user => {
      if (user) {
        const { displayName, email, photoURL } = user;
        this.user.next({
          displayName,
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
    return this.OAuthProvider(new firebaseAuth.GoogleAuthProvider);
  }

  async emailSignUp(signup: Signup) {
    const { name, surname, email, password, } = signup;
    await this.afAuth.createUserWithEmailAndPassword(email, password);
    (await this.afAuth.currentUser)?.updateProfile({
      displayName: `${name} ${surname}`,
    })
  }

  async emailSignIn(signin: Signin) {
    const { email, password } = signin;
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    this.user.next(null);
    return this.afAuth.signOut();
  }
}
