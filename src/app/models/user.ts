export interface User {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  token: string | null;
  uid: string;
}

export interface UserData {
  uid: string;
  selectedPlan?: number;
  currentPlan: null;
  history: null;
}
