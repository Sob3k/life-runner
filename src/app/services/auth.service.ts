import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { Router } from "@angular/router";
import * as firebaseAuth from "firebase/auth";
import { BehaviorSubject } from "rxjs";
import { Signin, Signup } from "../models/auth";
import { Settings } from "../models/settings";
import { User, UserData } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  usersRef: AngularFireList<UserData>;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFireDatabase,
  ) {
    this.afAuth.setPersistence("local");
    this.afAuth.authState.subscribe(async user => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        this.user.next({
          displayName,
          uid,
          email,
          photoURL,
          token: await user?.getIdToken(),
        });
        this.db.database.goOnline();
      }
    });
    this.usersRef = db.list("/users");
  }

  private async OAuthProvider(provider: firebaseAuth.GoogleAuthProvider) {
    const res = await this.afAuth.signInWithPopup(provider)
    const uid = res.user?.uid || "";
    let userIds: any[] = [];
    this.usersRef.valueChanges().subscribe(async data => {
      userIds = data.map(data => data.uid);
      if (!userIds.includes(uid)) {
        await this.usersRef.push({
          uid,
        });
      }
    });
    return res;
  }

  // Google signin/singup
  async signWithGoogleAccount() {
    return this.OAuthProvider(new firebaseAuth.GoogleAuthProvider);
  }

  async emailSignUp(signup: Signup) {
    const { name, surname, email, password, } = signup;
    return Promise.all([
      await this.afAuth.createUserWithEmailAndPassword(email, password),
      (await this.afAuth.currentUser)?.updateProfile({
        displayName: `${name} ${surname}`,
      }),
    ])
  }

  async emailSignIn(signin: Signin) {
    const { email, password } = signin;
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.afAuth.signOut();
    this.user.next(null);
    this.router.navigateByUrl("/");
    this.db.database.goOffline();
  }

  async addUser() {
    await this.usersRef.push({
      uid: this.user.value?.uid || ""
    });
  }

  async updateProfileInfo(settings: Settings) {
    const { name, surname, email, } = settings;
    (await this.afAuth.currentUser)?.updateProfile({
      displayName: `${name} ${surname}`,
    });
    (await this.afAuth.currentUser)?.updateEmail(email);
  }
}
