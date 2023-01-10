export interface Signin {
  email: string;
  password: string;
}

export interface Signup extends Signin {
  name: string;
  surname: string;
}
